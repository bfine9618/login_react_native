import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyDs4dJwBzcGcmh0vVsmHaQ9WVr55YVb1mI",
        authDomain: "auth-12577.firebaseapp.com",
        databaseURL: "https://auth-12577.firebaseio.com",
        storageBucket: "auth-12577.appspot.com",
        messagingSenderId: "41573426810"
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
