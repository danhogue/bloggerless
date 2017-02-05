import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.posts.
const posts = (state = [], action) => {
    if (action.type === ActionTypes.POSTS_SUCCESS && action.response && action.response.posts) {
        return merge({}, state, action.response.posts)
    }
    return state
}

const post = (state = {}, action) => {
    if (action.type === ActionTypes.POST_SUCCESS && action.response) {
        state = action.response
        return state
    }
    return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return action.error
    }

    return state
}

const rootReducer = combineReducers({
    posts,
    post,
    errorMessage,
    routing
})

export default rootReducer