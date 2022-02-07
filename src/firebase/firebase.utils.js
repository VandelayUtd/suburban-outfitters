import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCKy641tv26Pqr5JX7YEOAcfVOiBzP_rrM",
    authDomain: "suburban-outfitters-db.firebaseapp.com",
    projectId: "suburban-outfitters-db",
    storageBucket: "suburban-outfitters-db.appspot.com",
    messagingSenderId: "273948193800",
    appId: "1:273948193800:web:2dc5e4ab9dae55833e8dbd",
    measurementId: "G-C3C9GMN1Z4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;