import { auth, database } from '../firebase/firebase';

import {
  UPDATE_USER_PROFILE,
  UPDATE_SUCCESS,
  INPUT_ON_CHANGE,
  USER_PROFILE_FETCH_SUCCESS,
  UPDATE_SHIPPING_ADDRESS
} from './types';

export const inputOnChange = data => {
  return {
    type: INPUT_ON_CHANGE,
    payload: data
  };
};

export const updateUserProfile = ({ firstName, lastName, phone }) => {
  const { currentUser } = auth;
  return dispatch => {
    dispatch({ type: UPDATE_USER_PROFILE });
    database
      .ref(`users/${currentUser.uid}/profile`)
      .set({ firstName, lastName, phone })
      .then(() => {
        dispatch({ type: UPDATE_SUCCESS });
      });
  };
};

export const fetchUserProfile = () => {
  const { currentUser } = auth;
  return dispatch => {
    database.ref(`users/${currentUser.uid}/profile`).once('value', snapshot => {
      dispatch({ type: USER_PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const updateShippingAddress = ({
  shippingAddress,
  city,
  state,
  postalCode,
  shippingPhone
}) => {
  const { currentUser } = auth;
  return dispatch => {
    database
      .ref(`users/${currentUser.uid}/shippingAddress`)
      .push({
        shippingAddress,
        city,
        state,
        postalCode,
        shippingPhone
      })
      .then(() => {
        dispatch({ type: UPDATE_SHIPPING_ADDRESS });
      });
  };
};
