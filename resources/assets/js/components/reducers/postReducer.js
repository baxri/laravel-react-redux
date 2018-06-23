import { FETCH_POSTS, ADD_POST, ENTER_TITLE } from '../actions/postActions';

const initialState = {
    title: 'Post',
    items: [],
    item: {},
};

export const postsReducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, items: action.payload };
        case ADD_POST:
            return { ...state, items: [action.payload, ...state.items] };
        case ENTER_TITLE:
            return { ...state, title: action.payload };
        default:
            return state;
    }
}
