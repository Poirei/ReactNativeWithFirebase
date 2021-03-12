/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCYAf7D5xDHrHgaOUl5XLD6dy_vk7D52Y',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'react-native-frb-04',
  storageBucket: 'react-native-frb-04.appspot.com',
  messagingSenderId: '677471429401',
  appId: '1:677471429401:android:d463567bcc20204500db88',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
