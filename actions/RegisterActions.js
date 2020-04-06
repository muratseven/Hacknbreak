import { AsyncStorage ,Alert} from 'react-native';
import {
    LOADING_FALSE, alert,
    USER,

    REGISTER_START,
    REGISTER_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const register = (userName, email, password) => {
    return(dispatch) => {


            if( userName!==undefined && email !== undefined && password !== undefined ){



              if(password.length<6){Alert.alert(
            'Uyarı',
            '6 karakter ya da daha fazla karakterli şifre kullanın !',
            [
            {text: 'Tamam', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )}
              console.log(userName);
                console.log(email);
                console.log(password);

                dispatch({
                    type: REGISTER_START
                });

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        dispatch({
                            type: REGISTER_SUCCESS,
                            payload: user
                        });

                        const params = {
                            email,
                            nickname: userName,
                            password,
                        }

                        firebase.database().ref(`/users/${user.user.uid}`)
                        .set(params)
                        .then(() => {
                           Actions.Login();
                        });

                    })
                    .catch((err) => {
                        console.log('Hata!');
                        console.log(err);
                        alert('Mesaj', 'Lütfen kontrol et ve tekrar dene!', () => {
                            dispatch({
                                type: LOADING_FALSE,
                            });
                        });
                    });
            } else {
              Alert.alert(
            'Uyarı',
            'Lütfen Boş Alanları Doldurun !',
            [
            {text: 'Tamam', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
            )
            }

    }
}
