import { AsyncStorage } from 'react-native';
import { LOGIN_START, LOGIN_SUCCESS,
    LOADING_FALSE, alert,
    USER, LOGIN_LOCAL_ID,
    REGISTER_START,
    REGISTER_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const login = (email, password) => {
    return(dispatch) => {
        console.log(email);
        console.log(password);
        dispatch({
            type: LOGIN_START
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            // USER.user_info = user;
            console.log(user);
                dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            });
            Actions.MainPage({ type: 'reset' });
            const json = {
                email,
                password
            };
            AsyncStorage.setItem(LOGIN_LOCAL_ID, JSON.stringify(json));
        })
        .catch((err) => {
            console.log('Hata!');
            console.log(err);
            alert('Mesaj', 'Kullanıcı adı veya şifre hatalı', () => {
                dispatch({
                    type: LOADING_FALSE,
                });
            });
        });
    }
}
