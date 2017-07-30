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
            .then(data => {
                dispatch({ 
                    type: types.FETCH_TOP_STORIES_FULLFILLED,
                    payload: data
                });
            })
            .catch(res => {
                dispatch({ 
                    type: types.FETCH_TOP_STORIES_ERROR,
                    payload: res
                });
            })
    }
}