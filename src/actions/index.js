import { CALL_API, Schemas } from '../middleware/api'

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
    const url = '/index.json'
    return dispatch(fetchPosts(url))
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})