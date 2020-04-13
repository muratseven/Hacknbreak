import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import RegisterScreen from './RegisterScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={RegisterScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}
