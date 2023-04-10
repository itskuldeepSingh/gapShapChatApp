import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX_SjAWg2Us6EQSvOz2j0L7a28B_EFJNk",
  authDomain: "gapshap-1d014.firebaseapp.com",
  projectId: "gapshap-1d014",
  storageBucket: "gapshap-1d014.appspot.com",
  messagingSenderId: "85532928048",
  appId: "1:85532928048:web:6e0287a935e2c851ab25f5"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()