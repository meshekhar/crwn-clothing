import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDDvONZpe8QiuuOGznp6t_hizD6eAA1XLg",
    authDomain: "crwn-db-9b992.firebaseapp.com",
    databaseURL: "https://crwn-db-9b992.firebaseio.com",
    projectId: "crwn-db-9b992",
    storageBucket: "crwn-db-9b992.appspot.com",
    messagingSenderId: "266638673059",
    appId: "1:266638673059:web:43c18d4eedf1c576e1eb16"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  