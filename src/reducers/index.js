import { FETCH_SERVICES_SUCCESS } from 'types'
// import { combineReducers } from 'redux'
// import services from './services'
// import selectedService from './selectedService'
// import auth from './auth'
// import offers from './offers'
// import collaboration from './collaboration'

// const serviceApp = combineReducers({
//   services,
//   selectedService,
//   auth,
//   offers,
//   collaboration
// })


// export const getMessages = state => state.auth.messages
// export default serviceApp

const INITIAL_STATE = {
  items: []
}


const servicesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SERVICES_SUCCESS:
      return {...state, items: action.services}
      default:
        return state
  }
}

export default servicesReducer