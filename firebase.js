import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfClzt7gpLN2c6axjMXMon-MdD9QIyWSA",
  authDomain: "clone-nextjs-903ba.firebaseapp.com",
  projectId: "clone-nextjs-903ba",
  storageBucket: "clone-nextjs-903ba.appspot.com",
  messagingSenderId: "11840923793",
  appId: "1:11840923793:web:8f11bf221d69dab39c3730",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
