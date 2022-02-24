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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date()
      try {
        await userRef.set ({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log(error.message);
      }
    }
    return userRef
  } 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 