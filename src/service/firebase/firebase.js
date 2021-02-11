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

class FireBase {

  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then((snapshot) => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref(`pokemons/` + newKey).set(data);
  }
}

export default FireBase;
