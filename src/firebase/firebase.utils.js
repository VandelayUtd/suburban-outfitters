import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCKy641tv26Pqr5JX7YEOAcfVOiBzP_rrM",
    authDomain: "suburban-outfitters-db.firebaseapp.com",
    projectId: "suburban-outfitters-db",
    storageBucket: "suburban-outfitters-db.appspot.com",
    messagingSenderId: "273948193800",
    appId: "1:273948193800:web:2dc5e4ab9dae55833e8dbd",
  };

const firebaseApp = initializeApp(config);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
} 



  // export const createUserProfileDocument = async (userAuth, additionalData) => {
  //   if (!userAuth) return;

  //   const userRef = firestore.doc(`users/${userAuth.uid}`)

  //   const snapShot = await userRef.get()

  //   if (!snapShot.exists) {
  //     const {displayName, email} = userAuth;
  //     const createdAt = new Date()
  //     try {
  //       await userRef.set ({
  //         displayName, 
  //         email,
  //         createdAt,
  //         ...additionalData
  //       })
  //     } catch(error) {
  //       console.log(error.message);
  //     }
  //   }
  //   return userRef
  // } 


  // export const auth = firebase.auth();
  // export const firestore = firebase.firestore();

  // const provider = new firebase.auth.GoogleAuthProvider();
  // provider.setCustomParameters({ prompt: 'select_account'});
  // export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // export default firebase; 