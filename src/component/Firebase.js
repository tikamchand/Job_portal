import firebase from "firebase/compat/app";
// import firestore from "firebase/compat/app"
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyAmBtHrEkFpIWNw6Sn8ftEQanIRTHjosRE",
  authDomain: "jobportal-6thsem.firebaseapp.com",
  projectId: "jobportal-6thsem",
  storageBucket: "jobportal-6thsem.appspot.com",
  messagingSenderId: "683093636608",
  appId: "1:683093636608:web:ef3bf550a94f7ac4cf8ae5"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database;