const initialState = {
  counter: 0,
  banners: [],
  recommends: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.num };
    case "sub":
      return { ...state, counter: state.counter - action.num };
    case "changeBanners":
      return { ...state, banners: action.banners };
    case "changeRecommends":
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
};

export default reducer