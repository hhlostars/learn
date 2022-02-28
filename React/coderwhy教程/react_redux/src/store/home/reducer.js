const initialState = {
  banners: [],
  recommends: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeBanners":
      return { ...state, banners: action.banners };
    case "changeRecommends":
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
};

export default homeReducer