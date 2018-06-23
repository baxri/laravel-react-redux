export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';

export const fetchPosts = () => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}

export const addPost = (postData) => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(post => dispatch({
            type: ADD_POST,
            payload: post
        }))
}