import { AsyncStorage } from 'react-native';
import { LOGIN_START, LOGIN_SUCCESS,
    LOADING_FALSE, alert,
    USER, LOGIN_LOCAL_ID,
    REGISTER_START,
    REGISTER_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob'


export const uploadImage = (uri) => {
    const mime = 'application/octet-stream';
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    return(dispatch) => {
        console.log(email);
        console.log(password);
        dispatch({
            type: LOGIN_START
        });

    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null

      const imageRef = firebase.storage().ref('images').child('image_001')

      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
      })

    }
}
