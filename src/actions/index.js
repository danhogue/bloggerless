import { CALL_API } from '../middleware/api'

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'

const fetchPosts = (url) => ({
    [CALL_API]: {
        types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
        endpoint: url
    }
})

export const loadPosts = () => (dispatch, getState) => {
    const url = '/data/posts/index.json'
    return dispatch(fetchPosts(url))
}

export const POST_REQUEST = 'POST_REQUEST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'

const fetchPost = (url) => ({
    [CALL_API]: {
        types: [POST_REQUEST, POST_SUCCESS, POST_FAILURE],
        endpoint: url
    }
})

export const loadPost = (post) => (dispatch, getState) => {
    const url = '/data/posts/' + post + '/index.json'
    return dispatch(fetchPost(url))
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})