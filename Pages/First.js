import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from './aws-exports';
import RouterComponenet from './Tabs';

Amplify.configure(AWSConfig);


export default class First extends React.Component {
  state = {
    isAuthenticated: false,
  };
  authenticate = isAuthenticated => {
    this.setState({ isAuthenticated });
  };
  render() {
    if (this.state.isAuthenticated) {
      console.log('Auth: ', Auth);
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Hello !</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <RouterComponenet
        screenProps={{
          authenticate: this.authenticate,
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
