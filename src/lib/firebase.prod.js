import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed'; 

// we need to somehow seed the db

// we need a config here

const config = {
    apiKey: "AIzaSyCfCYT77L0ixZMqChgEmlkX_QaCMmou-34",
    authDomain: "monkflicks.firebaseapp.com",
    projectId: "monkflicks",
    storageBucket: "monkflicks.appspot.com",
    messagingSenderId: "891109826856",
    appId: "1:891109826856:web:35f73b590123169c94301d",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase); 

export { firebase }; 