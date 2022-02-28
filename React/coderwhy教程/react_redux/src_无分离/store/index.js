import { createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'

import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// + const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
//   ));

// 应用中间件
// 引入thunkMiddleware的中间件
// 创建SagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware()

const StoreEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)

const store = createStore(reducer, composeEnhancers(StoreEnhancer))

sagaMiddleware.run(saga)

export default store