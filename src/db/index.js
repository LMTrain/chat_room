

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyD-ehNY4etwJXRWZ8_C7GQkycnbeBgpAf4",
      authDomain: "unity-37358.firebaseapp.com",
      databaseURL: "https://unity-37358.firebaseio.com",
      projectId: "unity-37358",
      storageBucket: "unity-37358.appspot.com",
      messagingSenderId: "247105607907",
      appId: "1:247105607907:web:599d44fa0edaf84f08cdd6",
      measurementId: "G-PJJDHQ5JMN"
    }
  )
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }