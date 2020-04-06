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
import Login from './Pages/Login';
import Login2 from './Pages/Login2';
import Register from './Pages/Register';
import FirstPage from './Pages/FirstPage';
import First from './Pages/First';



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
            key="Login"
            component={Login}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="Kayıt"
            component={First}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="Login2"
            component={Login2}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="Register"
            component={Register}
            hideNavBar
            panHandlers={null}
        />
        <Scene
            key="FirstPage"
            component={FirstPage}
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
