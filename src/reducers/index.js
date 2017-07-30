import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import TopStoryReducer from './TopStoryReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    topStories: TopStoryReducer
});

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    middleware
);