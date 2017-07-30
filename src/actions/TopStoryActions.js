import * as api from '../api';

export const types = {
    FETCH_TOP_STORIES_START: "FETCH_TOP_STORIES_START",
    FETCH_TOP_STORIES_FULLFILLED: "FETCH_TOP_STORIES_FULLFILLED",
    FETCH_TOP_STORIES_ERROR: "FETCH_TOP_STORIES_ERROR"
};

export const fetchTopStories = (page = 1) => {
    return function (dispatch) {
        dispatch({ 
            type: types.FETCH_TOP_STORIES_START,
            payload: page
        }); 
        
        fetch(api.TOP_STORIES())
            .then(res => res.json())
            .then(ids => {
                var per_page = 30;
                var slice_pos = per_page * page;

                ids = ids.slice(slice_pos - per_page, slice_pos);

                // I don't want just the ids of stories
                // so i'm going to fetch each story
                // and only then return the data
                var data = [];

                for (var i = 0; i < ids.length; i++) {
                    // Get items
                    fetch(api.GET_ITEM(ids[i]))
                        .then(res => res.json())
                        .then(story => {
                            data.push(story);

                            // If all stories are fetched, then sort the data & dispatch 
                            if (data.length == ids.length) {
                                dispatch({ 
                                    type: types.FETCH_TOP_STORIES_FULLFILLED,
                                    payload: data.sort((a, b) => ids.indexOf(a[1]) - ids.indexOf(b[1]))
                                });
                            }
                        })
                }
                
            })
            .catch(res => {
                dispatch({ 
                    type: types.FETCH_TOP_STORIES_ERROR,
                    payload: res
                });
            })
    }
}