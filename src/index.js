import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8KMnM0W8zKKYFNspdPL5peRuDzg66vOc",
    authDomain: "cart-92e89.firebaseapp.com",
    databaseURL: "https://cart-92e89.firebaseio.com",
    projectId: "cart-92e89",
    storageBucket: "cart-92e89.appspot.com",
    messagingSenderId: "695643960588",
    appId: "1:695643960588:web:d40def1f5cba9cde4e8529"
  };
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
