import { INCREMENT, DECREMENT } from "../constant";

// 同步action action的值为object
export const incAction = (data) => ({type: INCREMENT, data})
export const decAction = (data) => ({type: DECREMENT, data})

// 异步action action的值为function
export const asyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incAction(data))
    }, time);
  }
}