import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApftLKpIzSlBJ79ioS2oDFSBV8NbgBuhE",
  authDomain: "gapshapp-e2cd5.firebaseapp.com",
  projectId: "gapshapp-e2cd5",
  storageBucket: "gapshapp-e2cd5.appspot.com",
  messagingSenderId: "435887066816",
  appId: "1:435887066816:web:117889c0490dcf8a246725"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()