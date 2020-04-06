import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Image,
   FlatList,
   Modal,
   Dimensions,
   ScrollView,
   Animated, TouchableOpacity,ImageBackground,KeyboardAvoidingView,Alert
} from 'react-native';
const Hackbreak = require('../images/logohb.png');
const Image1 = require('../images/illustration_1.png');
const Mail = require('../images/googlemail.png');
const Google = require('../images/google.png');
import { Button, Block, Text } from '../components';
import { theme } from '../components/constants';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
import {w, h, totalSize} from '../components/api/Dimensions';
import InputField from '../components/common/InputField';

class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  scrollX = new Animated.Value(0);

  state = {
    isNameCorrect: false,
    isEmailCorrect: false,
    isPasswordCorrect: false,
    isRepeatCorrect: false,
    isCreatingAccount: false,
    email: '',
    password: '',
    name: '',
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
  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Block style={styles.ImageContainer}>
        <Image
        style={styles.sectionTitle}
        source={Hackbreak}/>
      </Block>
      <Block style={{paddingTop: h(4),height: 30}}><Text primary medium h3 >Kayıt Olun</Text></Block>
        <InputField
          placeholder="Kullanıcı Adı"
          //error={this.state.isEmailCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.username = ref}
          returnKeyType = { "next" }
          onSubmitEditing={() => { this.secondTextInput.focus(); }}
          blurOnSubmit={false}
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          //error={this.state.isEmailCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.email = ref}
          returnKeyType = { "next" }
          onSubmitEditing={() => { this.secondTextInput.focus(); }}
          blurOnSubmit={false}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <InputField
          placeholder="Şifre"
          ref={(input) => { this.secondTextInput = input; }}
          error={this.state.isPasswordCorrect}
          style={styles.input}
          // focus={this.changeInputFocus}
          returnKeyType = { "done" }
          ref={ref => this.password = ref}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Text style={{width: w(70),fontSize: 12}} >{'<<'}Kayıt Ol{'>>'} butonuna tıkladığınızda, </Text>
        <Text style={{width: w(70),fontSize: 10,textDecorationLine: 'underline'}} onPress={ ()=>{ Linking.openURL('https://applocial.tk')}}> Kullanım Şartlarımızı ve Gizlilik Politikamızı </Text>
        <Text style={{width: w(70),fontSize: 12}}> kabul etmiş olursunuz.</Text>

      <Block middle margin={[45, theme.sizes.padding * 2]}>

          <Button style={{ borderRadius: theme.sizes.padding *2, backgroundColor: theme.colors.orange,}}shadow onPress={() => Actions.Register()}>
            <Text style={{width: w(70)}}center semibold h3>Kayıt Ol</Text>
          </Button>

          <Button style={{ backgroundColor:'transparent',}} onPress={() => Actions.Register()}>
            <Text center  h4>Girişi Atla</Text>
          </Button>
        </Block>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
sectionContainer:{
  paddingHorizontal: w(10),
  paddingTop: h(8),
  paddingVertical: h(2)
},
createAccount:{
  backgroundColor: 'red',

},

sectionTitle:{
  height: 100,
  width: 250,
},
textContainer:{
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: totalSize(2.5),
  paddingBottom: h(3)
},
ImageSize:{
  height: 180,
  width: 160,

},
ImageContainer:{
  marginHorizontal: w(20),
  marginVertical: h(10),

},
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
input:{
  textAlign: 'center',
  justifyContent: 'center',
},
descripton:{
  fontSize: totalSize(1.7),
  justifyContent: 'center',
  textAlign: 'center',
  color: '#3A404C'
},
stepsContainer: {
  position: 'absolute',
  bottom: theme.sizes.base * 3,
  right: 0,
  left: 0,
},
steps: {
  width: 5,
  height: 5,
  borderRadius: 5,
  marginHorizontal: 2.5,
},
});

export default Login;
