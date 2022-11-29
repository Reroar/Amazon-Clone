import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNTuFMaiDI7HXcWqVT22P1a2WPeFB9Pwc",
    authDomain: "clone-8e1e6.firebaseapp.com",
    projectId: "clone-8e1e6",
    storageBucket: "clone-8e1e6.appspot.com",
    messagingSenderId: "948287435150",
    appId: "1:948287435150:web:597905f9667d1fcd4f74df",
    measurementId: "G-WEVHBW5L74"
  };

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };