import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import LoginForm from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends Component {

  render() {
    return (
      <Wallpaper>
        <Logo />
        <LoginForm />
        <SignupSection />
      </Wallpaper>
    );
  }
}
