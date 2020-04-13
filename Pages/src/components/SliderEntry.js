import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

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
        const { data: { title, subtitle, profile, time, place }, even } = this.props;

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
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                <View style={[{flexDirection:'row',justifyContent:'space-between',}]}>
                <Text
                    style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'right'}]}
                    numberOfLines={2}
                  >
                  <Icon
                      name={'ios-pin'}
                      size={24}
                      style={[styles.inlineImg,{paddingRight:8,}]}
                    />  { place }
                  </Text>
                  <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {},{textAlign:'right',paddingRight:8,}]}
                      numberOfLines={2}
                    >
                    <Icon
                        name={'md-time'}
                        size={24}
                        style={[styles.inlineImg,{paddingRight:8,}]}
                      />  { time }
                    </Text>
                </View>


                <View style={[styles.textContainer, even ? styles.textContainerEven : {},{flexDirection:'row'}]}>
                  <Text
                  style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                    numberOfLines={3}
                  >
                    { uppercaseTitle }
                  </Text>
                </View>


                  <View style={[styles.profileContainer, even ? styles.textContainerEven : {}]}>
                  <Image
                    source={{ uri: profile }}
                    style={styles.profile}
                  />
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:12,justifyContent:'center',textAlign:'center',alignSelf:'center',paddingLeft:16}]}
                      numberOfLines={2}
                    >
                      { subtitle }
                    </Text>

                  </View>
                  <View style={[styles.profileContainer, even ? styles.textContainerEven : {},{justifyContent:'space-between',paddingRight:12}]}>
                  <TouchableOpacity
                  style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:12,justifyContent:'center',textAlign:'center',alignSelf:'center',borderWidth:1,borderRadius:30,padding:4,paddingHorizontal:12,flexDirection:'row'}]}
                  activeOpacity={1}
                  onPress={() => Actions.ChatScreen({ title: place, mekan: place })}
                  >
                  <Icon
                      name={'ios-flame'}
                      size={24}
                      style={[styles.inlineImg,{paddingRight:8,}]}
                    />
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:12,justifyContent:'center',textAlign:'center',alignSelf:'center',paddingLeft:1}]}
                      numberOfLines={2}
                    >

                      Sohbete Katıl
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:12,justifyContent:'center',textAlign:'center',alignSelf:'center',flexDirection:'row'}]}
                    activeOpacity={1}
                    onPress={() => { alert(`You've clicked '${title}'`); }}
                    >
                    <Icon
                        name={'ios-alarm'}
                        size={24}
                        style={[styles.inlineImg,{paddingRight:8,}]}
                      />
                      <Text
                        style={[styles.subtitle, even ? styles.subtitleEven : {},{fontSize:12,justifyContent:'center',textAlign:'center',alignSelf:'center',paddingLeft:1}]}
                        numberOfLines={2}
                      >

                        Takvime Ekle
                      </Text>
                      </TouchableOpacity>

                  </View>

                </View>
            </View>
        );
    }
}
