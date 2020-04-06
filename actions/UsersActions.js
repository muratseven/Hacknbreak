import { AsyncStorage } from 'react-native';
import {
    LOADING_FALSE, 
    alert,
    USER,
    USER_START,
    USER_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const getUser = () => {
    return(dispatch) => {
        
        dispatch({
            type: USER_START
        });

        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}`)
            .on('value', snapshot => {
                console.log('gelen Data');
                console.log(snapshot.val());
            
            USER.user_info = snapshot.val();

            // dispatch({ type: USER_SUCCESS, 
            //     payload: snapshot.val() });
            // });
        });

    }  
}