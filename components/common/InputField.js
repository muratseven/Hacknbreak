import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput} from 'react-native';
import {w, h, totalSize} from '../api/Dimensions';
const Hackbreak = require('../../images/logohb.png');

export default class InputField extends Component {
  state = {
    text: ''
  };

  getInputValue = () => this.state.text;

  render() {
    return (
      <View style={[styles.container, this.props.style, this.props.error ? styles.containerError : {}]}>
        <Image
      //  style={styles.icon}
        />
        <TextInput
          style={styles.inputText}
          value={this.props.value}
          selectionColor="white"
          autoCapitalize={this.props.autoCapitalize}
          ref={ref => this.input = ref}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.secureTextEntry}
          //blurOnSubmit={this.props.blurOnSubmit}
          keyboardType={this.props.keyboardType}
          //returnKeyType={this.props.returnKeyType}
          placeholder={this.props.placeholder}
          //onSubmitEditing={this.props.focus(this.props.placeholder)}
          placeholderTextColor="#868E96"
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

InputField.defaultProps = {
  focus: () => {},
  style: {},
  placeholder: '',
  blurOnSubmit: false,
  returnKeyType: 'next',
  error: false,
  keyboardType: null,
  secureTextEntry: false,
  autoCapitalize: "none",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F3F5',
    flexDirection: 'row',
    paddingVertical: w(3.4),
    borderRadius: w(10),
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: h(3),
    width: w(70),
  },
  containerError: {
    backgroundColor: '#EF9A9A88',
    borderWidth: 1,
    borderColor: '#E57373',
  },
  inputText: {
    color: 'black',
    flex: 1,
    marginLeft: w(4),
    fontSize: totalSize(2.5),
  },
  icon: {
    marginLeft: w(4),
    width: w(7),
    height: w(7),
  },
  iconError: {
    width: w(7),
    height: w(7),
    marginRight: w(3),
  },
});
