
// import { createStore, applyMiddleware, compose } from 'redux'
import { createStore, combineReducers } from 'redux'
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
    service: (state = {items: []}, action) => {

      if (action.type === 'FETCH_SERVICES') {
        return {...state, items: action.services}
      }

      return state
      
    }
  })
  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  
  const store = createStore(serviceApp, browserSupport)

  return store

}


export default initStore