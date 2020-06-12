
// import { createStore, applyMiddleware, compose } from 'redux'
// import serviceApp from 'reducers'

// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

// const initStore = () => {
//   const middlewares = [thunk]
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
//   if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(logger)
//   }

//   const store = createStore(
//     serviceApp, 
//     composeEnhancers(applyMiddleware(...middlewares))
//   )

//   return store
// }

// export default initStore

const services = [{
  id: '2asd8sa7d98',
  user: 'some_id_1',
  category: 'Mathematics',
  title: 'I will teach you programming fast',
  description: 'I am teaching C++, JAVA, Phyton, uygsjhds, ugjhd , iuhsjhgsu, ijfshg, kjhguyewmewb, iugdwjgds, djhbsdhg',
  price: 30,
  image: 'https://lmtrain.github.io/lm-images/assets/images/space2.webp'
}, {
  id: 'ssa9d789as7',
  user: 'some_id_2',
  category: 'Progrmming',
  title: 'I will teach you math fast',
  description: 'I am teaching highschool mathematics, algebra, trio. I can teach',
  price: 10,
  image: 'https://lmtrain.github.io/lm-images/assets/images/futurecar20.jpg'
}]


export const getServices = () => [...services]



