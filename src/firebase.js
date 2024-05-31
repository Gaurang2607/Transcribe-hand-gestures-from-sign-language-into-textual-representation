import firebase from "firebase/compat/app";   //Import main firebase module
import "firebase/compat/auth";   //Firebase authentication
import 'firebase/compat/firestore';  //firebase storage

const firebaseConfig = {     // for firebase configuraton
  apiKey: "AIzaSyCyIUIbFtQdpX3V0BHJqXwFgiPmOLdow08",
  authDomain: "signlanguagerecog-aafe8.firebaseapp.com",
  projectId: "signlanguagerecog-aafe8",
  storageBucket: "signlanguagerecog-aafe8.appspot.com",
  messagingSenderId: "745627867325",
  appId: "1:745627867325:web:1d81b13642bce383d1ffd4",
  measurementId: "G-BNKMH30J5R",
};

firebase.initializeApp(firebaseConfig);  //here we have initialized firebase with the above configuration

const auth = firebase.auth();    //for authentication like google sign in,out,managing users,etc
const db = firebase.firestore(); //allows us to interact with Firebase database for storage and retriving of the data

export { firebase, auth, db};
