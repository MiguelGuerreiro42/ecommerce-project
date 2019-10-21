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

/**
 * Método para fazer a inserção do usuário no momento do login e autenticação
 * com o google. Ele recupera o usuário autenticado no momento da montagem do componente,
 * vê se já existe um usuário na base com seu uid igual ao logado, se não, cria um novo
 * documento com o novo uid, nome de usuário, e email da google.
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Erro ao Criar Usuário", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
