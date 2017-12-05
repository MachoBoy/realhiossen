import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyATK9R8TL133ufl1hY9qKzEer2znVxPScc',
  authDomain: 'hiossenplaform.firebaseapp.com',
  databaseURL: 'https://hiossenplaform.firebaseio.com',
  projectId: 'hiossenplaform',
  storageBucket: '',
  messagingSenderId: '679502311399'
};
firebase.initializeApp(config);

//store data
export const database = firebase.database().ref('posts/');

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default config;
