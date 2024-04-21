// Firebase sign in
import 'firebase/firestore';
import 'firebase/auth'

import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
  signOut,
  getAuth,
  onIdTokenChanged
} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

// Google analytics
import { getAnalytics } from "firebase/analytics";

// firebase database
import { getDatabase, ref, set, get, child, update, onValue } from 'firebase/database'; 

// TS
import { Card } from '../src/features/search/cardType';

const firebaseConfig = {
  apiKey: "AIzaSyDZTdRn4Auo-weSPUceWIFinY0rQsVNn3U",
  authDomain: "jobchaser-26d9a.firebaseapp.com",
  projectId: "jobchaser-26d9a",
  storageBucket: "jobchaser-26d9a.appspot.com",
  messagingSenderId: "871802840073",
  appId: "1:871802840073:web:3c289fe370ec71235784d8",
  measurementId: "G-QGYD6EBDJH",
  databaseURL: 'https://jobchaser-26d9a-default-rtdb.europe-west1.firebasedatabase.app'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
getAnalytics(app);
export default function firebaseSignIn(){
  // User - is null when signed out and an object when singed in
  const auth = getAuth(); 
  auth.currentUser?.reload()
  const provider = new GoogleAuthProvider();
  const [user] = useAuthState(auth)

  return {
    auth, 
    user, 
    provider, 
    updateProfile,
    signInWithRedirect,
    signInWithPopup,  
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onIdTokenChanged,
    onAuthStateChanged,
    signOut
  }

}
// create prop in Database
export function registerUser(userId: string, email: string, fullname:string | null, password: string | null, profilPicURL: string | null ){

  set(ref(database,'users/' + userId), {
    userId: userId,
    fullname: fullname,
    email: email, 
    password: password,
    profileImg: profilPicURL
  })
}

// Get data only once. This wont update with the application
export function getDataFromDB(type: string, id: string){
  const dataRef = ref(database); 
  return new Promise((resolve) => {
    get(child(dataRef, type + '/' + id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log(snapshot.val());
        resolve(data)
      } else {
        resolve(snapshot.exists())
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  })
}

export function savedJobsObserver(id: string){
  return new Promise((resolve) => {
    onValue(ref(database, 'SavedJobs/' + id), (snapshot) => {
      // console.log(snapshot.val());
      resolve(snapshot.val())
    })
  })
}

// Reads specific property for set user and will update with the application. 
export function readSpecificProp(id: string, parentProp: string, childProp: string){
  const colorsRef = ref(database, parentProp+id+childProp); 
  onValue(colorsRef, (snapShot) => {
    const data = snapShot.val(); 
    console.log(snapShot.exists())
    console.log(data); 
  })
}

// Använd variabel till propEn. 
export function updateUserData(parentProp: string, id: string){
  update(ref(database, parentProp +'/'+ id), {
    email: 'Kevin.Muller@gmail.se',
    fullname: 'Kevin Muller',
    password: '1234432',
  })
}

export function updateSavedJobs(content: Card[], id: string){
  update(ref(database, 'SavedJobs' +'/'+ id), {
    jobs: content,
  })
}

