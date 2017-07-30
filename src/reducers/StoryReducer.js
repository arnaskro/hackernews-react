import { types } from '../actions/StoryActions';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    id: null, 
    data: {}
};

const StoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_STORY_START:
            return Object.assign({}, state, { 
                fetching: true,
                fetched: false,
                id: action.payload
            });
        case types.FETCH_STORY_FULLFILLED:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: true,
                error: null,
                data: action.payload
            });
        case types.FETCH_STORY_ERROR:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: false,
                error: action.payload
            });
        default: 
            return state;
    }
    
}

export default StoryReducer;