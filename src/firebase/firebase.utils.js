import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUXKeuslUlNNxNqxwntyFjt5MZzMP1D4g",
  authDomain: "ecommerce-project-1caa0.firebaseapp.com",
  databaseURL: "https://ecommerce-project-1caa0.firebaseio.com",
  projectId: "ecommerce-project-1caa0",
  storageBucket: "ecommerce-project-1caa0.appspot.com",
  messagingSenderId: "750733682855",
  appId: "1:750733682855:web:85f346e8b1a0a30e36d382"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
