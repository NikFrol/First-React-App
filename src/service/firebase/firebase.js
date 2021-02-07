import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB3KfcvjmhyJMHGNCba0kZYwS7gm3b5O5I",
    authDomain: "pokemon-game-f3da3.firebaseapp.com",
    databaseURL: "https://pokemon-game-f3da3-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-f3da3",
    storageBucket: "pokemon-game-f3da3.appspot.com",
    messagingSenderId: "644266697425",
    appId: "1:644266697425:web:2bb10ab12ac098f2b9dbf0"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;