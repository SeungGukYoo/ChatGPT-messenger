import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAah-njBiQzvQDUclvfD9Mf8ZT1yUiHeY4",
  authDomain: "chatgpt-messenger-25af0.firebaseapp.com",
  projectId: "chatgpt-messenger-25af0",
  storageBucket: "chatgpt-messenger-25af0.appspot.com",
  messagingSenderId: "380161394461",
  appId: "1:380161394461:web:0ecd0b7f90821ec09783f4",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
