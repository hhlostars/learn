import axios from 'axios'

export const changeBannersAction = (banners) => ({ type: 'changeBanners', banners})
export const changeRecommendAction = (recommends) => ({ type: 'changeRecommends', recommends})


// redux-thunk 定义 action 函数
export const getData = (dispatch, getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    console.log(res.data.data.banner.list);
    const banner = res.data.data.banner.list
    dispatch(changeBannersAction(banner))
  })
  console.log('action', dispatch);
}

// redux-saga 拦截action
export const fetchData = {
  type: 'fetchData'
}
