import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import {w, h, totalSize} from "../api/Dimensions";
import { Actions } from 'react-native-router-flux';
const MARGIN = 45;

export default class Buttonio extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.props.onClick}
          style={[styles.button,{color:'#3465d9'}]}>
        {this.props.isCreating
        ? <ActivityIndicator size="large" style={styles.spinner} color='white' />
        : <Text
        style={styles.text}>{this.props.title}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3465d9',
    height: MARGIN,
    marginTop:10,
    borderRadius: 8,
    zIndex: 100,
  },
  spinner: {
    height: h(5),
  },
  text: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
  }
});
