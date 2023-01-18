import dotenv from 'dotenv'

import firebase from 'firebase/app'
import 'firebase/auth'

dotenv.config()

const firebaseConfig = {
  // Your Firebase configuration goes here

  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'jonathan-todolist.firebaseapp.com',
  databaseURL: 'https://jonathan-todolist.firebaseio.com',
  projectId: 'jonathan-todolist',
  storageBucket: 'jonathan-todolist.appspot.com',
  messagingSenderId: '536323523898',
  appId: '1:536323523898:web:1593b0514d5ae031773c03',
}

firebase.initializeApp(firebaseConfig)
