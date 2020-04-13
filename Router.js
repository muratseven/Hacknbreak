import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Scene, Router,Drawer} from 'react-native-router-flux';
import Welcome from './Pages/Welcome';
import Login from './Pages/LoginPage';
import RegisterScreen from './Pages/Register/Form';
import MainPage from './Pages/MainPage';
import LoginScreen from './Pages/Login/Form';
import ChatScreen from './Pages/ChatScreen';

const RouterComponenet: () => React$Node = () => {
  return (
    <Router
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navTitle}
    sceneStyle={styles.firstScreen}
    >
     <Scene
      key="Root"
      sceneStyle={styles.firstScreen}
     >
        <Scene
            key="Welcome"
            component={Welcome}
            initial
            hideNavBar
            panHandlers={null}
        />

        <Scene
            key="LoginPage"
            component={LoginScreen}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="Register"
            component={RegisterScreen}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="MainPage"
            component={MainPage}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="ChatScreen"
            component={ChatScreen}
            hideNavBar
            panHandlers={null}
        />


    </Scene>
   </Router>
  );
};

const styles = StyleSheet.create({

  navBar: {
  },
  navTitle: {
    color: '#8C95A7',
    fontSize: 17,
    paddingLeft: 0,
  },
  firstScreen: {
    paddingTop: 0,
    backgroundColor: 'white'
  },

});

export default RouterComponenet;
