import { AsyncStorage } from 'react-native';
import {
    LOADING_FALSE, 
    alert,
    USER,
    USER_START,
    USER_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const setMessage = (mekan) => {
    return(dispatch) => {
        
        dispatch({
            type: USER_START
        });


        firebase.database().ref(`/${mekan}/`)
                .set(params)
                .then(() => {
                   Actions.Login();
                });

    }  
}