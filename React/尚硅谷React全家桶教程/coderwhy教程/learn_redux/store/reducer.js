import {ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT} from './constants.js'

const initalState = {
  counter: 0
}

function reducer(state = initalState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

export default reducer;