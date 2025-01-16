// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJed9wBd9ZscrO9FReTyKdK0FxED2yJdc",
  authDomain: "webster-db.firebaseapp.com",
  databaseURL: "https://webster-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webster-db",
  storageBucket: "webster-db.appspot.com",
  messagingSenderId: "954233357470",
  appId: "1:954233357470:web:fb78de6c1866a7b76b678f",
  measurementId: "G-CV3S92533C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);