import React, { Component } from 'react';
import { Platform,AsyncStorage, TouchableOpacity, ImageBackground, View, ScrollView,Image, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './src/styles/SliderEntry.style';
import SliderEntry from './src/components/SliderEntry';
import styles, { colors } from './src/styles/index.style';
import { ENTRIES1, ENTRIES2 } from './src/static/entries';
import { scrollInterpolators, animatedStyles } from './src/utils/animations';
import { Container, Content, Card, Header, Body, Button, Left, Right,Title, CardItem } from 'native-base';
const menu = require('../images/menu-icon.png');
const Hacknbreak = require('../images/logohb.png');
import { w, h, totalSize } from '../components/api/Dimensions';
import { connect } from 'react-redux';
import { LOGIN_LOCAL_ID, USER } from '../actions/types';
import { getUser } from '../actions';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation, {
  IconTab,
  FullTab
} from 'react-native-material-bottom-navigation'
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

class MainPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
             activeTab: 'games'
        };
    }

 tabs = [
  {
    key: 'games',
    label: 'Yemekler',
    barColor: '#388E3C',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    icon: 'md-pizza'
  },
  {
    key: 'movies-tv',
    label: 'Anasayfa',
    barColor: '#00695C',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    icon: 'ios-home'
  },
  {
    key: 'music',
    label: 'Bildirimler',
    barColor: '#6A1B9A',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    icon: 'md-notifications'
  },
  {
    key: 'books',
    label: 'Profil',
    barColor: '#1565C0',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    icon: 'md-person'
  }
]
state = {
activeTab: this.tabs[0].key
}
renderIcon = icon => ({ isActive }) => (
  <View >
  <Icon size={24} color="white" name={icon} />
  </View>
)


renderTab = ({ tab, isActive }) => (
  <IconTab
    isActive={isActive}
    key={tab.key}
    label={tab.label}
    renderIcon={this.renderIcon(tab.icon)}
  />
)

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }
    componentWillMount() {
      this.props.getUser();
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
          <View
          style={{flex: 1,
          }}

        >
          <View style={{backgroundColor:'white',flexDirection:'row',paddingHorizontal:w(5),paddingTop:h(3),justifyContent:'center'}} >
          <Left >
          {
            /*
            <Image
              style={{height:30,width:30,marginBottom:16,marginLeft:12}}
              source={menu}/>
            */
          }
            </Left>
            <Image
              style={{height:h(8),justifyContent:'center',width:w(45),marginTop:-h(1)}}
              source={Hacknbreak}/>
          <Right />
            </View>



            <View style={styles.exampleContainer}>

                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={false}
                  loopClonesPerSide={2}
                  autoplay={false}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                {
                  /*
                  <Pagination
                    dotsLength={ENTRIES1.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                  />
                  */
                }

            </View>
            <TouchableOpacity style={{margin:10}} onPress={() => {
              AsyncStorage.setItem(LOGIN_LOCAL_ID, JSON.stringify(null));
              Actions.LoginPage();}} iconRight>
              <Text >Çıkış</Text>
            </TouchableOpacity>
            </View>

        );
    }


    render () {
        const example1 = this.mainExample(1, );

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />

                    <View
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { example1 }

                    </View>
                    <BottomNavigation
                      tabs={this.tabs}
                      activeTab={this.state.activeTab}
                      onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                      renderTab={({ tab, isActive }) => (
                        <FullTab
                          isActive={isActive}
                          key={tab.key}
                          label={tab.label}
                          renderIcon={() => <Icon name={tab.icon} size={24} color="white" />}
                          />
                        )}
                        useLayoutAnimation
                        />
                </View>
            </SafeAreaView>
        );
    }
}
export default connect(null, { getUser })(MainPage);
