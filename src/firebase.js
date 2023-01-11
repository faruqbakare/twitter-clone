// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4JppiLR7GpsRQo9z3eEc8GjRisupHtUk",
  authDomain: "twitter-clone-dd918.firebaseapp.com",
  projectId: "twitter-clone-dd918",
  storageBucket: "twitter-clone-dd918.appspot.com",
  messagingSenderId: "902692668460",
  appId: "1:902692668460:web:32cb9fa8d1f41c2ceb7d89",
  measurementId: "G-EWW9Z9RX6L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db