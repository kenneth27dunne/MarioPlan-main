
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBrOqkyTGvQlJCfVv4ZIz3E1Y-mchBc0u8",
  authDomain: "mariouserlogin.firebaseapp.com",
  projectId: "mariouserlogin",
  storageBucket: "mariouserlogin.appspot.com",
  messagingSenderId: "798149213403",
  appId: "1:798149213403:web:ca2344d43bd8d7ff9960fe",
  measurementId: "G-FE5EYCZVED"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase 