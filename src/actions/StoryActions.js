import * as api from '../api';

export const types = {
    FETCH_STORY_START: "FETCH_STORY_START",
    FETCH_STORY_FULLFILLED: "FETCH_STORY_FULLFILLED",
    FETCH_STORY_ERROR: "FETCH_STORY_ERROR",
    STORY_RESET: "STORY_RESET"
};

let status = 0;
let global_data;

const checkIfEnded = (dispatch) => {
    if (--status == 0)
        dispatch({ 
            type: types.FETCH_STORY_FULLFILLED,
            payload: global_data
        });
}

const fetchComments = (dispatch, comment_ids) => {
    console.log(comment_ids)
    comment_ids.map((cmntId) => {
        status++;
        fetch(api.GET_ITEM(cmntId))
        .then(res => res.json())
        .then(data => {
            if (!data.deleted && global_data.comments.filter((x) => x == data.id).length == 0) {

                global_data.comments.push(data)
                
                if (data.kids.length > 0)
                    fetchComments(dispatch, data.kids)
            }

            checkIfEnded(dispatch)
        })
        .catch(res => {
            checkIfEnded(dispatch)
        })
    })
}

export const fetchStory = (id) => {
    return function (dispatch) {
        
        dispatch({ 
            type: types.FETCH_STORY_START,
            payload: id
        }); 
        
        fetch(api.GET_ITEM(id))
            .then(res => res.json())
            .then(data => {
                global_data = data;
                global_data.comments = [];
                
                if (data.kids.length > 0)
                    fetchComments(dispatch, data.kids);
                else
                    dispatch({ 
                        type: types.FETCH_STORY_FULLFILLED,
                        payload: global_data
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