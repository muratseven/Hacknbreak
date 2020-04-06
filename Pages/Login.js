import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Image,
   FlatList,
   Modal,
   Keyboard,
   Dimensions,
   TextInput,
   KeyboardAvoidingView,
   SafeAreaView,
   TouchableWithoutFeedback,
   ScrollView,
   Animated,
} from 'react-native';
const Hackbreak = require('../images/logohb.png');
const Image1 = require('../images/illustration_1.png');
const Mail = require('../images/googlemail.png');
const Google = require('../images/google.png');
import {w, h, totalSize} from "../components/api/Dimensions";
import { Button, Block, Text } from '../components';
import { theme } from '../components/constants';
import { Actions } from 'react-native-router-flux';
import PhoneInput from 'react-native-phone-input'
import { Auth } from 'aws-amplify';


class Login2 extends Component {
  constructor(){
super();
this.state ={
  show:true,
  show2:false,
  username: '',
  password: 'Password123+-*',
  user: {},
  confirmationCode:'',
  valid:"",
  type:"",
  value:"",
  showTerms: false,
  timer: 60,
  count: 0,

};



this.updateInfo = this.updateInfo.bind(this);
this.renderInfo = this.renderInfo.bind(this);

  }
  showHideComponent = () =>{
    if(this.state.show ==true){
      this.setState({show:false,show2:true});
    } else{
      this.setState({show:true,show2:false});
    }
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.title,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidUpdate(){
    if(this.state.timer === 0){
      clearInterval(this.interval);
      //Actions.Leaders();
    }
  }
  dogrula =() =>{
    this.confirmSignIn();

  }
  func =() =>{
    this.showHideComponent();
    this.signIn.bind(this);


  }

  updateInfo(){
    this.setState({
      valid:this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      value:this.phone.getValue()
    });
  }
  confirmSignIn() {
    Auth.confirmSignIn(this.state.user, this.state.confirmationCode)
      .then(() => {
        console.log('successful confirm sign in!');
        this.props.screenProps.authenticate(true);
      })
      .catch(err => console.log('error confirming signing in!: ', err));
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
      .then(() => console.log('successful confirm sign up!'))
      .catch(err => console.log('error confirming signing up!: ', err));
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }
  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
      .then(user => {
        this.setState({ user });
        console.log('successful sign in!');
      })
      .catch(err => console.log('error signing in!: ', err));
  }

  renderInfo(){

    if(this.state.value){
      return(
        <View style={styles.info}>

        <Text>
        Value:{" "}
        <Text style={{fontWeight: 'bold'}}>{this.state.value}</Text>
        </Text>
        </View>
      );
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Block style={{backgroundColor: "#515585"}}>
                <Block style={styles.ImageContainer}>
                  <Image
                    style={styles.sectionTitle}
                    source={Hackbreak}/>
                    <Text center caption style={{color:"white", width: w(70),opacity: 0.7,paddingTop: 10}}>Doğrulama Kodu {this.state.value} numaralı telefona gönderildi.</Text>
                      <Text style={{marginTop: 25}} center  white>{'00:'}{this.state.timer}</Text>
                </Block>
                <TextInput
                  onChangeText={value => this.onChangeText('username', value)}
                  style={styles.input}
                  placeholder="username"
                />
                <TextInput
                  onChangeText={value => this.onChangeText('confirmationCode', value)}
                  style={styles.input}
                  placeholder="confirmation Code"
                />

                <Block center style={{paddingBottom: h(15)}}>
                {this.state.show2 ?(
                  <Button onPress={this.dogrula} style={{width: w(60),height: h(7),marginTop: h(7),borderRadius: theme.sizes.padding *2,backgroundColor: theme.colors.orange,}}shadow >
                    <Text center semibold h4>Doğrula ve Kayıt ol</Text>
                  </Button>
                ):null}
                {this.state.show ?(
                  <Button onPress={this.func} style={{width: w(60),height: h(7),marginTop: h(7),borderRadius: theme.sizes.padding *2,backgroundColor: theme.colors.orange,}}shadow >
                    <Text center semibold h4>Sign in.</Text>
                  </Button>

                ):null}
                {this.renderInfo()}
                </Block>
          <Button style={{backgroundColor: "transparent"}} onPress={() => this.setState({ showTerms: true })}>
          <Text center  white style={{opacity: 0.7}}>SMS Ulaşmadı mı?</Text>
            <Text center  primary style={{}}>Tekrar Gönder</Text>
         </Button>
      </Block>
    </TouchableWithoutFeedback>
  </SafeAreaView>
</KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
sectionTitle:{
  height: 100,
  width: 250
},
input: {
  height: 50,
  color:'black',
  backgroundColor:'white',
  borderRadius:25,
  width:w(70),
  alignSelf: 'center',
  paddingHorizontal: 50,
  margin: 0,
},
info:{
  borderRadius: 5,
  backgroundColor: '#f0f0f0',
  padding: 10,
  //marginTop: 20
},
ImageContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: h(7),
  marginHorizontal: w(20),
  marginVertical: h(15)
},
});

export default Login2;
