import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAls1j-Dkbg2qMJj4k_8GpXHiFb3ZIrCLc",
  authDomain: "react-contact-form-3aec5.firebaseapp.com",
  projectId: "react-contact-form-3aec5",
  storageBucket: "react-contact-form-3aec5.appspot.com",
  messagingSenderId: "540882528665",
  appId: "1:540882528665:web:e9295e42180b7a01814b08",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
