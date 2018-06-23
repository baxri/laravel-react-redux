import { FETCH_POSTS, ADD_POST } from '../actions/postActions';

const initialState = {
    items: [],
    item: {},
};

export const postsReducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, items: action.payload };
        case ADD_POST:
            return { ...state, item: action.payload };
        default:
            return state;
    }
}
