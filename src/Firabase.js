import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
