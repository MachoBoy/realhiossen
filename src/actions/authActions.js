import { auth } from '../firebase/firebase';

import {
  REGISTRATION,
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from './types';

export const registration = () => {
  return {
    type: REGISTRATION
  };
};

export const getUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: 'GET_USER',
        payload: user
      });
    });
  };
};

// register user
export const registerUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: REGISTER_USER });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        registerFail(dispatch);
      });
  };
};

// user login handler
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log(error);
        loginUserFail(dispatch);
      });
  };
};

// logout
export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
    auth.signOut();
  };
};

// login fail
const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

// login success
const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const registerFail = dispatch => {
  dispatch({ type: REGISTER_FAIL });
};
