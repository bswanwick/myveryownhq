import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";
import { getFunctions } from "firebase/functions";
import { getRemoteConfig } from 'firebase/remote-config'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDRZuDB6eIDLYpvEKYMfPza9__D76n_ToI",
  authDomain: "myveryownhq.firebaseapp.com",
  projectId: "myveryownhq",
  storageBucket: "myveryownhq.appspot.com",
  messagingSenderId: "1073445984840",
  appId: "1:1073445984840:web:4e3f88374066e4f8ce567d",
  measurementId: "G-RJP4DLFKGD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
const analytics = getAnalytics(app);
const auth = getAuth(app); // TODO implement next
const database = getDatabase(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);
const messaging = getMessaging(app);
const remoteConfig = getRemoteConfig(app);
const storage = getStorage(app);

const theBackend = {
  app,
  analytics,
  realtime: database,
  firestore,
  auth,
  storage,
  messaging,
  functions,
  remoteConfig
}

export default theBackend;