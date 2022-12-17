// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv5sJQPPVWyYUySR8WycJkMvKj6LF8VVA",
  authDomain: "save-the-date-sabrina-y-demian.firebaseapp.com",
  projectId: "save-the-date-sabrina-y-demian",
  storageBucket: "save-the-date-sabrina-y-demian.appspot.com",
  messagingSenderId: "1048157277084",
  appId: "1:1048157277084:web:557fc0f798d2e6eda99659",
  measurementId: "G-G73712BSK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);