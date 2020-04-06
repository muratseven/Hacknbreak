import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import RouterComponenet from './Router';
const App: () => React$Node = () => {
  return (
          <RouterComponenet />
  );
};

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

export default App;
