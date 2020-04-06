import React, { Component } from 'react';
import { Platform, View, ScrollView,Image, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './src/styles/SliderEntry.style';
import SliderEntry from './src/components/SliderEntry';
import styles, { colors } from './src/styles/index.style';
import { ENTRIES1, ENTRIES2 } from './src/static/entries';
import { scrollInterpolators, animatedStyles } from './src/utils/animations';
import { Container, Content, Card, Header, Body, Button, Left, Right,Title, CardItem } from 'native-base';
const menu = require('../images/menu-icon.png');

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
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
          <Container style={{backgroundColor:'#2d88ad'}}>
          <Header style={{backgroundColor:'#2d88ad'}} >
          <Left >
          <Image
            style={{height:24,width:24,marginBottom:16,marginLeft:24}}
            source={menu}/>
            </Left>
          <Title style={{backgroundColor:'#2d88ad',color:'white',fontSize:24}}>Etkinlikler</Title>
          <Right />
            </Header>
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

            </View>
            </Container>

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

                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { example1 }

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
