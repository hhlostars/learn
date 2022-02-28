import { createStore, applyMiddleware, combineReducers} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

// 引入count 组件的 reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

import thunk from 'redux-thunk'

const allReducer = combineReducers({
  count: countReducer,
  person: personReducer
})


// console.log(createStore(allReducer, applyMiddleware(thunk)));
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))