import {
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_FAIL,
  GET_USER
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  authenticated: false,
  registerFail: false,
  authFail: false,
  message: '',
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        //user: action.payload,
        loading: false,
        authFail: false
      };
    case LOGOUT_USER:
      return { ...state, authenticated: false };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        authFail: true,
        message: 'Invalid Email or password.   Please try again',
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerFail: true,
        message: 'Registration Failed',
        loading: false
      };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
