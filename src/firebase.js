


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWCfzgrl2WfOb_LQ4BG_uvHlE9cLFu8Yc",
    authDomain: "slack-chat-6445b.firebaseapp.com",
    projectId: "slack-chat-6445b",
    storageBucket: "slack-chat-6445b.appspot.com",
    messagingSenderId: "150636563176",
    appId: "1:150636563176:web:99cc9f09b882d7f460575d",
    measurementId: "G-TDHT6GFVWN",
  };




// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db
