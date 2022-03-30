const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.num };
    case "sub":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
};

export default counterReducer