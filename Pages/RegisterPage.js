import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Image,
   Modal,
   Keyboard,
   KeyboardAvoidingView,
   SafeAreaView,
   TextInput,
   Platform,
   TouchableWithoutFeedback,
   ScrollView,
} from 'react-native';
const Hackbreak = require('../images/logohb.png');
const Image1 = require('../images/illustration_1.png');
const Mail = require('../images/googlemail.png');
const Google = require('../images/google.png');

import {w, h, totalSize} from "../components/api/Dimensions";
import { Button, Block, Text } from '../components';
import { theme } from '../components/constants';
import { Actions } from 'react-native-router-flux';

class RegisterPage extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    show:false,
    show2:true,
    showTerms: false,
    username: '',
    user: {},
    password:'Password123+-*',
    phone_number: '',
    confirmationCode: '',
  }
  showHideComponent = () =>{
    if(this.state.show ==true){
      this.setState({show:false,show2:true});
    } else{
      this.setState({show:true,show2:false});
    }
  }
  componentDidMount(){
    this.setState({
      //  pickerData: this.phone.getPickerData()
    })
}
onChangeText(key, value) {
  this.setState({
    [key]: value,
  });
}

func =() =>{
  this.signUp();
  this.showHideComponent();

}
dogrula =() =>{
  this.confirmSignUp();
  this.confirmSignIn();
  this.signIn();
  Actions.Login();
}

onPressFlag(){
    this.myCountryPicker.open()
}

selectCountry(country){
    this.phone.selectCountry(country.iso2)
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
            <Text center bold primary >I understand</Text>
          </Button>
        </Block>
      </Block>
    </Modal>
  )
}
  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1, backgroundColor: "#2d88ad"}}>
        <SafeAreaView style={{ flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Block style={{backgroundColor: "#2d88ad",paddingTop:h(5)}}>
                <Block style={styles.ImageContainer}>
                  <Image
                    style={styles.sectionTitle}
                    source={Hackbreak}
                    />
                    <Text center style={{color:"white", fontSize:totalSize(1.4), width: w(70), opacity: 0.7,paddingTop: h(5)}}>Yeni bir hesap oluşturmak veya giriş yapmak için telefon numaranı girmelisin.</Text>
                </Block>
                <View>
                {this.state.show2?(
                  <TextInput
                    onChangeText={value => this.onChangeText('username', value)}
                    style={styles.input}
                    placeholderTextColor="gray"
                    placeholder="Ad Soyad"
                  />
                ):null}
                <TextInput
                  onChangeText={value => this.onChangeText('phone_number', value)}
                  style={styles.input}
                  placeholderTextColor="gray"
                  placeholder="+905*********"
                />
                {this.state.show ?(
                  <TextInput
                    onChangeText={value => this.onChangeText('confirmationCode', value)}
                    style={styles.input}
                    placeholderTextColor="gray"
                    placeholder="doğrulama kodu"
                  />
                ):null}
                </View>
                <Block center style={{paddingBottom: h(3)}}>
                {this.state.show ? (
                  <Button onPress={this.dogrula } style={{width: w(60),height: h(7),marginTop: h(1),borderRadius: theme.sizes.padding *2,backgroundColor: theme.colors.orange,}}shadow >
                    <Text center semibold h4>Doğrula ve Kayıt ol</Text>
                  </Button>
                ):null}
                {this.state.show2 ?(
                  <Button onPress={this.func} style={{width: w(60),height: h(7),marginTop: h(3),borderRadius: theme.sizes.padding *2,backgroundColor: '#dba606',}}shadow >
                    <Text center semibold h4 style={{color:'black'}}>Devam Et</Text>
                  </Button>
                ):null}
                </Block>
          <Button style={{backgroundColor: "transparent",marginTop: h(7)}} onPress={() => this.setState({ showTerms: true })}>
            <Text center caption white style={{opacity: 0.7}}>By signing up, you confirm{"\n"} the Terms of Service</Text>
         </Button>
         <Button style={{backgroundColor: "transparent"}} onPress={() => Actions.FirstPage()}>
           <Text right caption white style={{opacity: 0.6,paddingRight: w(15)}}>Girişi Atla</Text>
        </Button>
        {this.renderTermsService()}
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
  color:'black',
  backgroundColor:'white',
  borderRadius:totalSize(5),
  width: w(70),
  paddingHorizontal: 30,
  marginBottom: 20,
  alignSelf: 'center',
  borderWidth: 1,
  height: h(7.5)
},
ImageContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: h(1),
  marginHorizontal: w(20),
  marginVertical: h(1)
},
});

export default RegisterPage;
