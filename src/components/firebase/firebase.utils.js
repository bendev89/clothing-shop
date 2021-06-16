import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAr4rX5G-RqtS_NWk_wABkgiZTtBcEv9n0",
    authDomain: "clothingshop-9324c.firebaseapp.com",
    projectId: "clothingshop-9324c",
    storageBucket: "clothingshop-9324c.appspot.com",
    messagingSenderId: "849632380453",
    appId: "1:849632380453:web:9bd72cb41ee236b3abe1cc"
  };
  firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
          
        } catch (error) {
          console.log("erreur lors de la creation de l'utilisateur", error.message)
        }
      }
      return userRef;

      
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;