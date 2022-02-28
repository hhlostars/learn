import { takeEvery, put} from 'redux-saga/effects'
import axios from 'axios'

import {changeBannersAction} from './action'

function* fetchData(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const banners = res.data.data.banner.list
  yield put(changeBannersAction(banners))
}


// 拦截fetchData
function* mySaga() {
  yield takeEvery('fetchData', fetchData)
}


export default mySaga;