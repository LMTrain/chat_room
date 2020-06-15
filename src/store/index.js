
// import { createStore, applyMiddleware, compose } from 'redux'
import { createStore, combineReducers } from 'redux'
import servicesReducer from 'reducers'
// import serviceApp from 'reducers'

// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

const addLoggerToDispatch = store => {
  const dispatch = store.dispatch

  return action  => {
    console.group(action.type)
    console.log('%c Prev state', 'color: yellow', store.getState())
    console.log('%c action', 'color: green', action)
    const returnValue = dispatch(action)
    console.log('%c next state', 'color: cyan', store.getState())
    console.groupEnd(action.type)
    return returnValue

  }
}

const addPromiseToDispatch = store => {
  const dispatch = store.dispatch

  return action => {
    if (typeof action.then === 'function') {
      return action.then((action) => {
        dispatch(action)
      })
    }
    return dispatch(action)
  }
}

const initStore = () => {
  // const middlewares = [thunk]
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // const store = createStore(
  //   serviceApp, 
  //   composeEnhancers(applyMiddleware(...middlewares))
  // )

  const serviceApp = combineReducers({
    service: servicesReducer
  })
  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()  
  const store = createStore(serviceApp, browserSupport)
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggerToDispatch(store)   
  }
  store.dispatch = addPromiseToDispatch(store)

  return store

}


export default initStore