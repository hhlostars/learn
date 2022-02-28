import counterReducer from './counter'
import homeReducer from './home'
import { combineReducers } from 'redux'

// function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action)
//   }
// };


const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})
export default reducer