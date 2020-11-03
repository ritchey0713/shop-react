import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from "./firebase.secrets";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if no auth obj comes through terminate func
  if (!userAuth) return;

  //queryRef
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(firestore.doc('users/1234vefve'))
  //userRef (document reference) - (used for performing CRUD actions)
  const snapShot = await userRef.get();
  // console.log(snapShot)

  // creates new user if it isnt already in db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("ERROR CREATEING USER", e.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  ObjectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //batching sets thiings up so if a single failure happens they all fail (keeps db from having issues not having all data)
  const batch = firestore.batch();
  ObjectsToAdd.forEach((obj) => {
    //generates new firestore id for each obj
    const newDocRef = collectionRef.doc();
    // we pass the docref obj that has our id, and the original obj we want to save
    batch.set(newDocRef, obj);
  });
  await batch.commit();
};

firebase.initializeApp(config);

//google auth

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
