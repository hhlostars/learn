import store from './store/index.js'

import {addAction, subAction, inc, dec} from './store/actionCreators.js'


// 监听
store.subscribe(() => {
  console.log('state发生了改变, counter:', store.getState().counter);
})

// 派发action
store.dispatch(addAction(2))
store.dispatch(inc())
store.dispatch(addAction(2))
store.dispatch(addAction(3))
store.dispatch(subAction(3))
store.dispatch(subAction(2))

