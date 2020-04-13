import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Image,
   FlatList,
   Modal,
   Dimensions,
   ScrollView,
   Animated,
} from 'react-native';
const Hackbreak = require('../images/logohb.png');
const Image1 = require('../images/illustration_1.png');
import {w, h, totalSize} from "../components/api/Dimensions";
import { Button, Block, Text } from '../components';
import { theme } from '../components/constants';
const { width, height } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false,
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
            <Button  onPress={() => this.setState({ showTerms: false })}>
              <Text center black>I understand</Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    )
  }
  renderIllustrations() {
    const { illustrations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Block><Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 4, overflow: 'visible' }}
          />
          <View flex={5}>
          <Text style={{ justifyContent: 'center',textAlign: 'center',paddingTop: h(6)}} >{item.text}</Text>
          <Text style={{ color:'gray',marginTop:h(2),justifyContent: 'center',textAlign: 'center',fontSize:totalSize(1.2)}} >{item.descripton}</Text>
          </View>
      </Block>
        )}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }])
        }
      />
    )
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity}]}
            />
          )
        })}
      </Block>
    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block flex={1}>
        <Block flex={1} >
          <Block style={styles.ImageContainer}>
          <Image
          style={styles.sectionTitle}
          source={Hackbreak}/>
          </Block>
          <Block flex={5}>
            <Text center gray3>Açık İnovasyon Kampına Hoşgeldiniz</Text>
          </Block>
        </Block>
        <Block flex={1} center middle >
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button style={{ borderRadius: theme.sizes.padding *2,backgroundColor: theme.colors.orange,}}shadow onPress={() => Actions.LoginPage()}>
            <Text center semibold h4>Başlayalım</Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    )
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../images/illustration_1.png'),text:'Hackathon/Ideathon',descripton:'Ortaya atılan problemi çözmek üzere takımlar halinde \nbelirli bir süre aralık vermeden çalışan maraton tipi \netkinlik türleridir.'},
    { id: 2, source: require('../images/illustration_2.png'),text:'Eğitim/Workshops',descripton:'Kamp süresince bir saat ile birden fazla gün sürebilen\n bir konuda derinlemesine öğrenme yapılmasını hedefleyen\n etkinlik tipleridir.' },
    { id: 3, source: require('../images/illustration_3.png'),text:'Sosyal Aktiviteler',descripton:'Tamamen serbest etkinlik olarak aralarda, akşamları \n ya da diğer etkinliklere paralel düzenlenen \netkinliklerdir.' },
  ],
};

const styles = StyleSheet.create({
sectionContainer:{
  paddingHorizontal: w(10),
  paddingTop: h(8),
  paddingVertical: h(2)
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
  marginHorizontal: w(20),
  marginVertical: h(15)
},
ImageContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: h(3),
  marginHorizontal: w(20),
  marginVertical: h(15)
},
descripton:{
  fontSize: totalSize(1.7),
  justifyContent: 'center',
  textAlign: 'center',
  color: '#3A404C'
},
stepsContainer: {
  position: 'absolute',
  bottom: theme.sizes.base * 7,
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

export default Welcome;
