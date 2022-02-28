const initPersonData = [{id: 1,name: 'tom', age: 19}]

export default function personReducer(preState = initPersonData, action) {
  console.log(preState);
  console.log(action);
  const { type, data } = action
  switch (type) {
    case 'ADD_PERSON':
      return [data, ...preState]
    default:
      return preState
  }
}