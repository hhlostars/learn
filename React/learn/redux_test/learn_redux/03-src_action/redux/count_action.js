import { INCREMENT, DECREMENT } from "./constant";

export const incAction = (data) => ({type: INCREMENT, data})
export const decAction = (data) => ({type: DECREMENT, data})