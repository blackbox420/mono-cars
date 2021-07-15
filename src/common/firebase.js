import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCAwwEW12j0SNFk6pLNw4tT1N4H5VCJeeo",
  authDomain: "mono-vehicles-51aa5.firebaseapp.com",
  databaseURL: "https://mono-vehicles-51aa5-default-rtdb.firebaseio.com",
  projectId: "mono-vehicles-51aa5",
  storageBucket: "mono-vehicles-51aa5.appspot.com",
  messagingSenderId: "655943122661",
  appId: "1:655943122661:web:cd3f8eb3b851145365de0c",
  measurementId: "G-MX7PDX752J",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
