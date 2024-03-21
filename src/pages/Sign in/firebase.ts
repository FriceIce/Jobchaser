// @ts-nocheck

// Firebase
import 'firebase/firestore';
import 'firebase/auth'

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getAuth} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Google analytics
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';

const firebaseSignIn = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDZTdRn4Auo-weSPUceWIFinY0rQsVNn3U",
    authDomain: "jobchaser-26d9a.firebaseapp.com",
    projectId: "jobchaser-26d9a",
    storageBucket: "jobchaser-26d9a.appspot.com",
    messagingSenderId: "871802840073",
    appId: "1:871802840073:web:3c289fe370ec71235784d8",
    measurementId: "G-QGYD6EBDJH"
  }
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  // User - is null when signed out and an object when singed in
  const auth = getAuth(); 
  const provider = new GoogleAuthProvider();
  auth.onAuthStateChanged((user) => {
   if(user) console.log(user.displayName, user.uid)
  })

  const [user] = useAuthState(auth)
  return {auth, user, provider}

}

export default firebaseSignIn; 