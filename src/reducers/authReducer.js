import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  message: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return { ...state, authenticated: false };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        message: 'Invalid Email or password. Please try again'
      };
    default:
      return state;
  }
}
