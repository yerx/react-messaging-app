import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgam6utZd1IoeSFcchYlIXsuJGNnjmCB8",
  authDomain: "react-messaging-app-c4ae9.firebaseapp.com",
  databaseURL: "https://react-messaging-app-c4ae9.firebaseio.com",
  projectId: "react-messaging-app-c4ae9",
  storageBucket: "react-messaging-app-c4ae9.appspot.com",
  messagingSenderId: "740941622791",
  appId: "1:740941622791:web:28e71f1df72a75871c04a2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;