import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyChnc9TumwKqeI-iv5jRG_QcgM_E5JU-Cg",
  authDomain: "portfolio-c3b53.firebaseapp.com",
  databaseURL: "https://portfolio-c3b53.firebaseio.com",
  projectId: "portfolio-c3b53",
  storageBucket: "portfolio-c3b53.appspot.com",
  messagingSenderId: "650010142573",
  appId: "1:650010142573:web:e6f2449747a9557b5e1c64",
  measurementId: "G-LTHPH1GW8E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };