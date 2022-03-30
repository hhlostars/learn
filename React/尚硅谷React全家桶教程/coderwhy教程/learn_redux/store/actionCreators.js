// export function addAction(num) {
//   return {
//     type: 'ADD',
//     num
//   }
// }

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js'

export const addAction = (num) => ({ type: ADD_NUMBER, num})
export const subAction = (num) => ({ type: SUB_NUMBER, num})
export const inc = () => ({ type: INCREMENT})
export const dec = (num) => ({ type: DECREMENT})