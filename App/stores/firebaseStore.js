import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCLrBLiMyxHnQjQJmEXwIJis_zcfZc2F7g',
  authDomain: 'awesomeceiling-a8db0.firebaseapp.com',
  databaseURL: 'https://awesomeceiling-a8db0.firebaseio.com',
  storageBucket: 'awesomeceiling-a8db0.appspot.com',
}

firebase.initializeApp(config);

const root = firebase.database().ref();
const materialTypes = firebase.database().ref('materialTypes');
const prices = firebase.database().ref('prices');
const materials = firebase.database().ref('materials');
// const users = firebase.database().ref('users');
// const user = firebase.auth().currentUser;

const fb = {
  root,
  prices,
  materials,
  materialTypes,
};

export {
  firebase,
  fb,
};
