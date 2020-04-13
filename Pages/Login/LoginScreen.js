import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends Component {
  componentWillMount() {
    Actions.refresh({drawerLockMode : 'locked-closed'})
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
      </Wallpaper>
    );
  }
}
