
// import { createStore, applyMiddleware, compose } from 'redux'
import { createStore, combineReducers } from 'redux'
import servicesReducer from 'reducers'
// import serviceApp from 'reducers'

// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

const initStore = () => {
  // const middlewares = [thunk]
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  // if (process.env.NODE_ENV !== 'production') {
  //   middlewares.push(logger)
  // }

  // const store = createStore(
  //   serviceApp, 
  //   composeEnhancers(applyMiddleware(...middlewares))
  // )

  const serviceApp = combineReducers({
    service: servicesReducer
  })
  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  
  const store = createStore(serviceApp, browserSupport)

  return store

}


export default initStore