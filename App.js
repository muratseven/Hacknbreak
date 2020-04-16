import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import RouterComponenet from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount(){
        if(!firebase.apps.length){
          firebase.initializeApp({
            apiKey: "AIzaSyDW5kKAaDskSrHa-IvfXTsxC12feW68YPI",
            authDomain: "hacknbreak-7.firebaseapp.com",
            databaseURL: "https://hacknbreak-7.firebaseio.com",
            projectId: "hacknbreak-7",
            storageBucket: "hacknbreak-7.appspot.com",
            messagingSenderId: "1001591225533",
            appId: "1:1001591225533:web:090432bbfd5e4186640bd4",
            measurementId: "G-6WQBVQDJW9"
          });
        }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <RouterComponenet />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({

  body: {
    backgroundColor:'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',
  },

});
