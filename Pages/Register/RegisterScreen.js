import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import RegisterForm from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { Actions } from 'react-native-router-flux';

export default class RegisterScreen extends Component {

  render() {
    return (
      <Wallpaper>
        <Logo />
        <RegisterForm />
        <SignupSection />
      </Wallpaper>
    );
  }
}
