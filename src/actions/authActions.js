import { auth } from '../firebase/firebase';

import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from './types';

// user login handler
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        loginUserFail(dispatch);
      });
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

// logout
export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
    auth.signOut();
  };
};
