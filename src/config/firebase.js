import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBJZg609sA7z7yPz9yqQJssvX49Z-4oXSU',
  authDomain: 'tiktok---jornada-35e6e.firebaseapp.com',
  projectId: 'tiktok---jornada-35e6e',
  storageBucket: 'tiktok---jornada-35e6e.appspot.com',
  messagingSenderId: '556004761713',
  appId: '1:556004761713:web:0fcb28ec600b2154c03bd0'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
