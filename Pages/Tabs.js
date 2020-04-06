import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Scene, Router,Drawer} from 'react-native-router-flux';
import SignIn from './SignIn';
import SignUp from './SignUp';


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
            key="SignIn"
            component={SignIn}
            hideNavBar
            initial
            
            panHandlers={null}
        />
        <Scene
            key="SignUp"
            component={SignUp}
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
