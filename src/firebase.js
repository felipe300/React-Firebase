import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// check the hook and change 'firebase/firestore' to 'firebase/firestore/lite'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBE5jtP6ngs_OA9pEbd-PY7Oium-s8PqhY',
  authDomain: 'react-firebase-ec566.firebaseapp.com',
  projectId: 'react-firebase-ec566',
  storageBucket: 'react-firebase-ec566.appspot.com',
  messagingSenderId: '395484916063',
  appId: '1:395484916063:web:705f724f259af6fd70eeea'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
