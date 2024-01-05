import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBr7LmXDgOpRwFMMV2zILcpcWlnBN6e0Hg",
  authDomain: "myfirstapp-51079.firebaseapp.com",
  projectId: "myfirstapp-51079",
  storageBucket: "myfirstapp-51079.appspot.com",
  messagingSenderId: "74546774452",
  appId: "1:74546774452:web:dcf580144e164c50f472e1"
};

const app = initializeApp(firebaseConfig);


const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}