// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_POSTS = 'FETCH_POSTS';

// ------------------------------------
// Actions
// ------------------------------------

export function fetchPosts () {
  return {
      type : FETCH_POSTS,
      value: null
  }
}

export const actions = {
    fetchPosts
};



// ------------------------------------
// Action Handlers
// ------------------------------------

let fetch = (state, action) => {
    return state + action.payload
};

const ACTION_HANDLERS = {
    [FETCH_POSTS]: fetch
};



// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = {}, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
