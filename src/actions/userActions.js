import { auth, database } from '../firebase/firebase';

import {
  UPDATE_USER_PROFILE,
  UPDATE_SUCCESS,
  INPUT_ON_CHANGE,
  USER_PROFILE_FETCH_SUCCESS,
  ADD_SHIPPING_ADDRESS,
  ADD_SHIPIING_ADDRESS_SUCCESS,
  FETCH_SHIPPING_ADDRESS_SUCCESS
} from './types';

export const inputOnChange = data => {
  return {
    type: INPUT_ON_CHANGE,
    payload: data
  };
};

export const updateUserProfile = ({
  customerCode,
  firstName,
  lastName,
  phone
}) => {
  const { currentUser } = auth;
  return dispatch => {
    dispatch({ type: UPDATE_USER_PROFILE });
    database
      .ref(`users/${currentUser.uid}/profile`)
      .set({ customerCode, firstName, lastName, phone })
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
  shippingFirstName,
  shippingLastName,
  shippingAddress,
  companyName,
  city,
  state,
  postalCode,
  shippingPhone
}) => {
  const { currentUser } = auth;
  return dispatch => {
    dispatch({ type: ADD_SHIPPING_ADDRESS });
    database
      .ref(`users/${currentUser.uid}/shippingAddress`)
      .push({
        shippingFirstName,
        shippingLastName,
        shippingAddress,
        companyName,
        city,
        state,
        postalCode,
        shippingPhone
      })
      .then(() => {
        dispatch({ type: ADD_SHIPIING_ADDRESS_SUCCESS });
      });
  };
};

export const fetchUserAddressbook = () => {
  const { currentUser } = auth;
  return dispatch => {
    database
      .ref(`users/${currentUser.uid}/shippingAddress`)
      .on('value', snapshot => {
        dispatch({
          type: FETCH_SHIPPING_ADDRESS_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
