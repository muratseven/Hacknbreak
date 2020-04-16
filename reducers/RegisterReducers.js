import {
    LOADING_FALSE,
    REGISTER_START,
    REGISTER_SUCCESS
    } from '../actions/types';
  
  const INITIAL_STATE = {
    loadingRegister: false,
  };

  export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
      case REGISTER_START:
        return { ...state, loadingRegister: true, data: action.payload  };

    case REGISTER_SUCCESS:
        return { ...state, loadingRegister: false, data: action.payload};

    case LOADING_FALSE:
        return { ...state, loadingRegister: false };

      default:
        return state;
    }
  };