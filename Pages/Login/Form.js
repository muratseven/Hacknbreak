import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  Animated,
  Modal,
  Platform,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  NativeModules,
  Easing,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { w, h, totalSize } from '../../components/api/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Block, Text } from '../../components';
import { theme } from '../../components/constants';
const Hackbreak = require('../../images/logohb.png');
import { connect } from 'react-redux';
import Buttonio from '../../components/common/Button';
import { login } from '../../actions';

import eyeImg from '../../images/user-2.png';
import password from '../../images/lock.png';

const MARGIN = 45;
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputUserName: '',
      isLoading: false,
      TextInputPassword: '',
      Status:'',
      showTerms: false,
      show:false,
      show2:true,
      showPass: true,
      press: false,
      username: '',
      isNameCorrect: false,
      isEmailCorrect: false,
      isPasswordCorrect: false,
      isRepeatCorrect: false,
      isCreatingAccount: false,
      email: '',
      password: '',
      users: [],
    };
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };
  createUserAccount = () => {
    const name = this.name.getInputValue();
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();
    const repeat = this.repeat.getInputValue();

    this.setState({
      isNameCorrect: name === '',
      isEmailCorrect: email === '',
      isPasswordCorrect: password === '',
      isRepeatCorrect: repeat === '' || repeat !== password,
    }, () => {
      if(name !== '' && email !== '' && password !== '' && (repeat !== '' && repeat === password)){
        this.createFireBaseAccount(name, email, password);
      } else {
        Alert.alert(
  'Uyarı',
  'Lütfen Boş Alanları Doldurun !',
  [
    {text: 'Tamam', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
      }
    })
  };
  createFireBaseAccount = (name, email, password) => {
    this.setState({ isCreatingAccount: true });
    Firebase.createFirebaseAccount(name, email, password)
      .then(result => {
        if(result) this.props.change('login')();
        this.setState({ isCreatingAccount: false });
      });
  };
  changeInputFocus = name => () => {
    switch (name) {
      case 'Name':
        this.setState({ isNameCorrect: this.name.getInputValue() === '' });
        this.email.input.focus();
        break;
      case 'Email':
        this.setState({ isEmailCorrect: this.email.getInputValue() === '' });
        this.password.input.focus();
        break;
      case 'Password':
        this.setState({ isPasswordCorrect: this.password.getInputValue() === '',
          isRepeatCorrect: (this.repeat.getInputValue() !== ''
            && this.repeat.getInputValue() !== this.password.getInputValue()) });
        this.repeat.input.focus();
        break;
      default:
        this.setState({ isRepeatCorrect: (this.repeat.getInputValue() === ''
            || this.repeat.getInputValue() !== this.password.getInputValue()) });
    }
  };
  renderAlert() {
    const murat = this.state.TextInputUserName;
    const seven = this.state.TextInputPassword;
    if (true) {
      Alert.alert(
        "Uyarı",
        "Misafir kullanıcılar HacknBreak `in hizmetlerinin tamamından yararlanamazlar.",
        [
          {
            text: "Giriş Yap",
            onPress: () => console.log('Tekrar Giriş Yap'),
            style: 'cancel',
          },
          {
            text: "Girişi Atla",
            onPress:  ()=>Actions.Welcome(),

          },
        ],
        { cancelable: false }
      );
    } else {
      null;
    }
  }
  _onPress() {
    const murat = this.state.TextInputUserName;
    const murat1 = this.state.TextInputPassword;

    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {

      if (murat === '' && murat1 === '') {
        Alert.alert(
          "Uyarı",
          "E-mail ve Şifre Hatalı",
          [
            {
              text: "Tekrar Giriş Yap",
              onPress: () => console.log('Tekrar Giriş Yap'),
              style: 'cancel',

            },
            {
              text: "Girişi Atla",
              onPress: () => Actions.MainPage(),
            },
          ],
          { cancelable: false }
        );
        Actions.refresh({key: Math.random()})
      }
      else if (murat === '') {
        Alert.alert(
          "HATA",
          "E-mail adresinizi girmeniz gerekiyor!",
          [
            {
              text: "Tekrar Giriş Yap",
              onPress: () => console.log('Tekrar Giriş Yap'),
              style: 'cancel',

            },
            {
              text: "Girişi Atla",
              onPress: () => Actions.Welcome(),
            },
          ],
          { cancelable: false }
        );
        Actions.refresh({key: Math.random()})

}
else if (murat1 === '') {
  Alert.alert(
    "HATA",
    "Şifrenizi girmeniz gerekiyor!",
    [
      {
        text: "Tekrar Giriş Yap",
        onPress: () => console.log('Tekrar Giriş Yap'),
        style: 'cancel',

      },
      {
        text: "Girişi Atla",
        onPress: () => Actions.Welcome(),
      },
    ],
    { cancelable: false }
  );
  Actions.refresh({key: Math.random()})
}
else {
        //Actions.push({ QTY : "selamlar merhaba" });
        Actions.drawer({ QTA : "Ehüüü" });
        Actions.Welcome({type:'reset'});
        //NativeModules.DevSettings.reload();
      }
      this.setState({ isLoading: false });
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 800);

    setTimeout(() => {
      //NativeModules.DevSettings.reload();
    }, 2500);
  }
  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
    const murat = this.state.TextInputUserName;

  }

  componentWillMount() {

    const murat = this.state.TextInputUserName;
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  renderTermsService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms} onRequestClose={() => this.setState({ showTerms: false })}>
        <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
          <Text h2 light>Terms of Service</Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              2. Support for Expo services is only available in English, via e-mail.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
            </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button onPress={() => this.setState({ showTerms: false })}>
              <Text center bold primary >Anladım ve Kabul Ediyorum</Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    )
  }
  render() {

    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });
    const mur = this.state.username;
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (
      <View style={styles.container}>
      <ScrollView style={styles.inputWrapper}>
      <View style={styles.container3}>
      <Image
        source={Hackbreak}
        style={styles.sectionTitle}
      />
      </View>
      <View >
      <Text left caption style={{fontSize:25,paddingBottom:h(1),paddingLeft:w(5),fontWeight:'bold',color:'#3465d9'}}>Giriş Yap</Text>
      </View>
        <View style={styles.inputWrapper}>
          <Icon
            name={'md-mail'}
            size={20}
            style={styles.inlineImg}
          />
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email =>
              this.setState({ email })
            }
            onSubmitEditing={() => this.secondInput.focus()}
            placeholder={"E-mail"}
            placeholderTextColor="gray"
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            ref={input => {
              this.textInput = input;
            }}
            returnKeyType={ "next" }
          />
        </View>

        <View style={styles.inputWrapper}>
          <Icon
              name={'ios-lock'}
              size={24}
              style={styles.inlineImg}
            />
          <TextInput
            value={this.state.password}
            style={styles.input}
            ref={input => {
              this.textInput = input;
            }}
            onChangeText={password =>
              this.setState({ password })
            }
            ref={ref => {
            this.secondInput = ref;
          }}
            secureTextEntry={this.state.showPass}
            placeholder={"Şifre"}
            placeholderTextColor="gray"
            returnKeyType={'done'}
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.btnEye}>
            <Icon
              name={this.state.press == false ? 'ios-eye-off' : 'ios-eye'}
              size={20}
              style={{ color: '#002964' }}
              onPress={this.showPass.bind(this)}
            />
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.showPass.bind(this)}
            />
          </View>
        </View>

        <View style={styles.container1}>
        <View style={{justifyContent:'flex-end',marginRight:w(5),alignSelf:'flex-end'}}>
        <Text right gray style={{justifyContent:'flex-end',textAlign:'right'}}>Şifremi Unuttum</Text>
        </View>
          <Animated.View style={{ width: changeWidth }}>
          <Buttonio
            title='Giriş Yap'
            onClick={() => this.props.login(this.state.email, this.state.password)}
            isCreating={this.props.loading}
          />
            <Animated.View
              style={[styles.circle, { transform: [{ scale: changeScale }] }]}
            />
          </Animated.View>

          <TouchableOpacity
            activeOpacity={1}
            style={[styles.button1,{flexDirection:'row'}]}
            onPress={() => Actions.Register()}>
            <Text style={[styles.text,{color:'gray'}]}>Burada yeni misiniz ? </Text>
            <Text style={[styles.text,{color:'#3465d9'}]}>Hesap Oluştur</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.button1}
            >
            <Button style={{backgroundColor: "transparent",}} onPress={() => this.setState({ showTerms: true })}>
              <Text center h5 gray style={{}}>Kullanım Şartları</Text>
           </Button>
            {this.renderTermsService()}
          </TouchableOpacity>
        </View>
      </ScrollView>
      </View>

    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    height: 100,
    width: 250,
    marginTop: h(2),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3465d9',
    height: MARGIN,
    marginTop:10,
    borderRadius: 8,
    zIndex: 100,
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3465d9',
    height: MARGIN,
    marginTop:10,
    width:w(85),
    borderRadius: 16,
    zIndex: 100,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: MARGIN,
    marginTop:h(1),
    borderRadius: 8,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
  },
  text: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: DEVICE_WIDTH - 80,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderWidth:1,
    borderRadius: 8,
    color: 'rgba(0, 0, 0, 1)',
  },
  inputWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  picture: {
    flex: 1,
    width: null,
    paddingHorizontal:20,
    height: null,
    resizeMode: 'cover',
  },
  container3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: h(1),
    width: 22,
    height: 22,
    right: 32,
  },
});
const mapStateToProps = ({  responseLogin }) => {
  const { loading, data } = responseLogin;
  console.log(loading);
  console.log(data);
  return { loading, data } ;
};
export default connect(mapStateToProps, { login })(LoginForm);
