import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { w, h, totalSize } from '../../../components/api/Dimensions';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }


    render () {
        const { data: { title, subtitle, profile, time, place, day }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <View
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${place}'`); }}
              >
              { /*
                  <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                      { this.image }
                      <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                  </View> */}

                <View style={[styles.textContainer, even ? styles.textContainerEven : {},{height: h(50)}]}>
                <View style={[{flexDirection:'row',justifyContent:'space-between',}]}>
                <Text
                    style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'right'}]}
                    numberOfLines={2}
                  >
                  <Icon
                      name={'ios-pin'}
                      size={24}
                      color='#f7d646'
                      style={[styles.inlineImg,{paddingRight:8,}]}
                    />  { place }
                  </Text>
                  <TouchableOpacity
                  style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:12,justifyContent:'center',textAlign:'center',alignSelf:'center',flexDirection:'row'}]}
                  activeOpacity={1}
                  onPress={() => { alert(`You've clicked alarm!!!! '${title}'`); }}
                  >

                  <Icon
                      name={'ios-add'}
                      size={35}
                      color='#f7d646'
                      style={[styles.inlineImg,{paddingRight:8,}]}
                    />
                    </TouchableOpacity>
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {},{flexDirection:'row'}]}>
                  <Text
                  style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                    numberOfLines={4}
                  >
                    { uppercaseTitle }
                  </Text>
                </View>



                  <View style={{flex: 1,justifyContent:'flex-end',alignItems: 'flex-end',alignContent: 'flex-end',paddingRight:12,}}>

                  </View>
                  <View style={{flex: 1,justifyContent:'flex-end',alignItems: 'flex-end',alignContent: 'flex-end',paddingRight:12,}}>

                  </View>
                  <View style={{flex: 1,flexDirection: 'row',justifyContent:'center',alignItems: 'flex-end',alignContent: 'flex-end',paddingRight:12,}}>
                  <Image
                    source={{ uri: profile }}
                    style={styles.profile}
                  />
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:16,justifyContent:'center',textAlign:'center',fontWeight: 'bold',alignSelf:'center',paddingLeft:16}]}
                      numberOfLines={2}
                    >
                      { subtitle }
                    </Text>
                  </View>


                  <View style={[styles.profileContainer, even ? styles.textContainerEven : {},{flex: 1,alignItems: 'flex-end',alignSelf: 'flex-start',alignContent: 'flex-start'}]}>

                  <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'left',paddingRight:8,}]}
                      numberOfLines={2}
                    >
                    <Icon
                        name={'md-time'}
                        color="#f7d646"
                        size={24}
                        style={[styles.inlineImg,{paddingRight:8,}]}
                      />  { time }
                    </Text>
                    <Text
                        style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'right',paddingRight:8,flex: 1,alignItems: 'flex-end',alignSelf: 'flex-end',alignContent: 'flex-start',fontSize: 14}]}
                        numberOfLines={2}
                      >
                      Katılımcı Sayısı
                      </Text>
                    </View>





                    <View style={[styles.profileContainer, even ? styles.textContainerEven : {},{alignItems: 'flex-end',alignSelf: 'flex-start',alignContent: 'flex-start'}]}>

                    <Text
                        style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'left',color: '#f7d646',paddingRight:8,}]}
                        numberOfLines={2}
                      >
                        { day }
                      </Text>
                      <Text
                          style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'right',color: '#f7d646',flex: 1,paddingRight: 12,fontSize: 16,alignItems: 'flex-end',alignSelf: 'flex-end',alignContent: 'flex-end',fontSize: 16,fontWeight: '800'}]}
                        >
                        25
                        </Text>
                      </View>
                </View>
                <TouchableOpacity
                style={styles.spesificButton}
                activeOpacity={1}
                onPress={() => Actions.ChatScreen({ title: place, mekan: place })}
                >
                  <Text
                    style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:16,justifyContent:'center',textAlign:'center',letterSpacing: 0.9,fontWeight: '600',alignSelf:'center',paddingLeft:1,color:'black'}]}
                    numberOfLines={2}
                  >

                    Sohbete Katıl
                  </Text>
                  </TouchableOpacity>
            </View>
        );
    }
}
