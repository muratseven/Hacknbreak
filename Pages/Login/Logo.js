import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { w, h, totalSize } from '../../components/api/Dimensions';
import { Icon, Button } from 'native-base';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
              <Image
                source={require('../../images/logohb.png')}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: h(8),
                }}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
