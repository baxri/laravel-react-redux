import { combineReducers } from 'redux';

// Import all reducers
import { postsReducer } from './postReducer';

export default combineReducers({
    posts: postsReducer,
});