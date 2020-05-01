import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        //backgroundColor: 'red',
        //height: slideHeight*1.7,
        //paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    spesificButton:{
      fontSize:16,
      borderBottomLeftRadius: entryBorderRadius*4,
      borderBottomRightRadius: entryBorderRadius*4,
        width: itemWidth,
        height: slideHeight/5,
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center',
        borderWidth:1,
        fontWeight: '400',
        borderColor: '#f7d646',
        padding:4,

        paddingHorizontal:12,
        flexDirection:'row',
        backgroundColor: '#f7d646'
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        //borderTopLeftRadius: entryBorderRadius,
        //borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: colors.black
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        //borderTopLeftRadius: entryBorderRadius,
      //  borderTopRightRadius: entryBorderRadius
    },
    profile: {
        height:50,
        width:50,
        borderRadius:25,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    profileContainer: {
        flexDirection:'row',
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
        //justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: '#5f30c7',
        //borderRadius: entryBorderRadius*4,
        borderTopLeftRadius: entryBorderRadius*4,
        borderTopRightRadius: entryBorderRadius*4,
        //borderBottomLeftRadius: entryBorderRadius,
        //borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: '#5f30c7'
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white',
    },
    subtitle: {
        marginTop: 6,
        fontWeight: '600',
        letterSpacing: 0.2,
        color: 'white',
        fontSize: 16,
    },
    subtitleEven: {
        color: 'white',
    }
});
