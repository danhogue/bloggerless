// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';


// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export const actions = {
  increment
};


// ------------------------------------
// Action Handlers
// ------------------------------------
const handleIncrement = (state, action) => {
  console.log(state);
  state = state + action.payload;
  console.log(state);
  return state;
};

const ACTION_HANDLERS = {
  [COUNTER_INCREMENT] : handleIncrement
};


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
