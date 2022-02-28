import { createStore } from 'redux'

// 引入count 组件的 reducer
import countReducer from './count_reducer'

export default createStore(countReducer)