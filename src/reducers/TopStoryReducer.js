import { types } from '../actions/TopStoryActions';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    page: 1,
    data: []
};

const TopStoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_TOP_STORIES_START:
            return Object.assign({}, state, { 
                fetching: true,
                fetched: false,
                page: action.payload
            });
        case types.FETCH_TOP_STORIES_FULLFILLED:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: true,
                error: null,
                data: action.payload
            });
        case types.FETCH_TOP_STORIES_ERROR:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: false,
                error: action.payload
            });
        default: 
            return state;
    }
    
}

export default TopStoryReducer;