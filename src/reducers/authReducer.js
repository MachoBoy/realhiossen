import {
  REGISTRATION,
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  registration: false,
  authenticated: false,
  registerFail: false,
  authFail: false,
  message: '',
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTRATION:
      return { ...state, registration: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return { ...state, authenticated: false };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        authFail: true,
        message: 'Invalid Email or password.   Please try again'
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerFail: true,
        message: 'Email are alreay exist'
      };
    default:
      return state;
  }
}
