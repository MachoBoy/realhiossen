import {
  UPDATE_USER_PROFILE,
  USER_PROFILE_FETCH_SUCCESS,
  INPUT_ON_CHANGE,
  UPDATE_SHIPPING_ADDRESS,
  UPDATE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  customerCode: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  shippingAddress: '',
  city: '',
  state: '',
  postalCode: '',
  shippingPhone: '',
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  //console.log(action);
  switch (action.type) {
    case INPUT_ON_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case UPDATE_USER_PROFILE:
      return { ...state, loading: true };
    case USER_PROFILE_FETCH_SUCCESS:
      return action.payload;
    case UPDATE_SHIPPING_ADDRESS:
      return {
        ...state
      };
    case UPDATE_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
