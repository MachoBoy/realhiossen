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
export const database = firebase.database();
export const auth = firebase.auth();

export default config;
