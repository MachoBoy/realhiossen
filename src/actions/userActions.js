import { auth, database } from '../firebase/firebase';

import {
  UPDATE_USER_PROFILE,
  PROFILE_ON_CHANGE,
  USER_PROFILE_FETCH_SUCCESS
} from './types';

export const profileOnChange = ({ prop, userInput }) => {
  return {
    type: PROFILE_ON_CHANGE,
    payload: { prop, userInput }
  };
};

export const updateUserProfile = ({
  customerCode,
  firstName,
  lastName,
  email,
  phone,
  address,
  uid
}) => {
  const { currentUser } = auth;
  return dispatch => {
    database
      .ref(`users/${currentUser.uid}/profile`)
      .set({ customerCode, firstName, lastName, email, phone, address })
      .then(() => {
        dispatch({ type: UPDATE_USER_PROFILE });
      });
  };
};

export const fetchUserProfile = () => {
  const { currentUser } = auth;
  return dispatch => {
    database.ref(`users/${currentUser.uid}/profile`).on('value', snapshot => {
      dispatch({ type: USER_PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
