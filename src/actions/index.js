
// import * as api from 'api'

// export * from './services'
// export * from './auth'
// export * from './offers'
// export * from './collaborations'
// export * from './connection'

// export const createRef = (collection, docId) => api.createRef(collection, docId)



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


  
export const fetchServices = () => {
    return {
        type: 'FETCH_SERVICES',
        services
    }
}