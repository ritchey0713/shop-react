import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import config from "./firebase.secrets"

firebase.initializeApp(config)

//google auth 

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup