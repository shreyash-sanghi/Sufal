import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBmI2Pv5jaGnXNyBEDc6i7OL13ZAV1H7uA",
  authDomain: "sufal-67df7.firebaseapp.com",
  projectId: "sufal-67df7",
  storageBucket: "sufal-67df7.appspot.com",
  messagingSenderId: "942392091366",
  appId: "1:942392091366:web:98a274eb97870778191127"
};

const app = initializeApp(firebaseConfig);
export  const imageDb = getFirestore(app);