import { Alert} from 'react-native';

export const LOGIN_START= 'login_start';
export const LOGIN_SUCCESS = 'login_success';

export const REGISTER_START= 'register_start';
export const REGISTER_SUCCESS = 'register_success';

export const LOGIN_LOCAL_ID = 'login_local_iddd';

export const LOADING_FALSE = 'loading_false';


export const USER_START= 'user_start';
export const USER_SUCCESS = 'user_success';


export const alert = (title, message, onPress) => {
    Alert.alert(
        title,
        message,
        [
          {text: 'Tamam', onPress}
        ],
        { cancelable: false }
      )
}

export const USER = {
    user_info: null
};
