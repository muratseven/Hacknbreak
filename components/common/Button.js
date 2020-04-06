import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import {w, h, totalSize} from "../api/Dimensions";
import { Actions } from 'react-native-router-flux';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.props.onClick}
        style={styles.button}>
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
    width: w(85),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAB005',
    paddingVertical: w(2),
    borderRadius: w(10),
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginTop: h(4),
  },
  spinner: {
    height: h(5),
  },
  text: {
    color: 'white',
    fontWeight: '600',
    paddingVertical: h(1),
    fontSize: totalSize(2.2),
  }
});
