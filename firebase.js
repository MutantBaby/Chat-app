import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDD0JyDyFv1Oj54iuvA0nBv2knNKSAEzs",
  authDomain: "whatsapp-clone-2c9a8.firebaseapp.com",
  projectId: "whatsapp-clone-2c9a8",
  storageBucket: "whatsapp-clone-2c9a8.appspot.com",
  messagingSenderId: "930398248425",
  appId: "1:930398248425:web:fc70997203693314ecff78",
};

let app;

if (getApps().length === 0) app = initializeApp(firebaseConfig);
else app = getApp();

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
