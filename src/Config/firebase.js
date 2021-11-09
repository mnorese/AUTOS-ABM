import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

var firebaseConfig = {
    apiKey: "AIzaSyCBlptw0wItaSVRvZ-lVqIJynyrq-U29Ks",
  authDomain: "autosweb-d9bdc.firebaseapp.com",
  projectId: "autosweb-d9bdc",
  storageBucket: "autosweb-d9bdc.appspot.com",
  messagingSenderId: "848030672359",
  appId: "1:848030672359:web:6928be515076bb9f300942"
};

const firebase = initializeApp(firebaseConfig);


export default firebase;
