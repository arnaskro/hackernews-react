import * as api from '../api';

export const types = {
    FETCH_STORY_START: "FETCH_STORY_START",
    FETCH_STORY_FULLFILLED: "FETCH_STORY_FULLFILLED",
    FETCH_STORY_ERROR: "FETCH_STORY_ERROR",
    STORY_RESET: "STORY_RESET"
};

export const fetchStory = (id) => {
    return function (dispatch) {
        
        dispatch({ 
            type: types.FETCH_STORY_START,
            payload: id
        }); 
        
        fetch(api.GET_ITEM(id))
            .then(res => res.json())
            .then(data => {
                dispatch({ 
                    type: types.FETCH_STORY_FULLFILLED,
                    payload: data
                });
            })
            .catch(res => {
                dispatch({ 
                    type: types.FETCH_STORY_ERROR,
                    payload: res
                });
            })
    }
}

export const clearStory = () => {
    return function(dispatch) {
        dispatch({ 
            type: types.STORY_RESET
        }); 
    }
}