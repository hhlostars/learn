
export default function countReducer(preState=99, action) {
  console.log(preState);
  console.log(action);
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
    return preState
  }
}
