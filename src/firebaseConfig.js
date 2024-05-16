
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyA-XzW6oFysnuOLtgbVAddjNogUziD2J6Y",

  authDomain: "pf-reactcoder.firebaseapp.com",

  projectId: "pf-reactcoder",

  storageBucket: "pf-reactcoder.appspot.com",

  messagingSenderId: "66966236134",

  appId: "1:66966236134:web:91fb5830cbeb0335e58427"

};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

