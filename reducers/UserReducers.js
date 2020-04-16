import {
    LOADING_FALSE,
    USER_START,
    USER_SUCCESS
    } from '../actions/types';
  
  const INITIAL_STATE = {
    loading: false,
  };

  export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
      case USER_START:
        return { ...state, loading: true, data: action.payload  };

    case USER_SUCCESS:
        return { ...state, loading: false, data: action.payload};

    case LOADING_FALSE:
        return { ...state, loading: false };

      default:
        return state;
    }
  };