
import { FETCH_SERVICES_SUCCESS } from 'types'

import db from 'db'
// import * as api from 'api'

// export * from './services'
// export * from './auth'
// export * from './offers'
// export * from './collaborations'
// export * from './connection'

// export const createRef = (collection, docId) => api.createRef(collection, docId)
  
export const fetchServices = () => {
  
  return db
    .collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => doc.data())      
      return {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    })

}