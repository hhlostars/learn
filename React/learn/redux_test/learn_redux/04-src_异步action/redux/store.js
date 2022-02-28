import { createStore, applyMiddleware } from 'redux'

// 引入count 组件的 reducer
import countReducer from './count_reducer'

import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))