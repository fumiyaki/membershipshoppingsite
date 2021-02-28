import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ngwXLY7EYhWYhHYoax7wQtJI4K-uOac",
  authDomain: "membershipshoppingsite.firebaseapp.com",
  projectId: "membershipshoppingsite",
  storageBucket: "membershipshoppingsite.appspot.com",
  messagingSenderId: "994856732585",
  appId: "1:994856732585:web:3d030ca4ddd5d0689666b8",
  measurementId: "G-1MEX0ERLF4",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const FirebaseTimeStamp = firebase.firestore.Timestamp;
