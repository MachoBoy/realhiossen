import {
  UPDATE_USER_PROFILE,
  USER_PROFILE_FETCH_SUCCESS,
  INPUT_ON_CHANGE,
  UPDATE_SUCCESS,
  ADD_SHIPPING_ADDRESS,
  ADD_SHIPIING_ADDRESS_SUCCESS,
  FETCH_SHIPPING_ADDRESS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  customerCode: '',
  shippingFirstName: '',
  shippingLastName: '',
  email: '',
  phone: '',
  shippingAddress: '',
  companyName: '',
  city: '',
  state: '',
  postalCode: '',
  shippingPhone: '',
  userloading: false,
  profileSaved: false,
  shippingAddressSaved: false,
  shippingAddressBook: {}
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
      return { ...state, userloading: true };
    case USER_PROFILE_FETCH_SUCCESS:
      return action.payload;
    case ADD_SHIPPING_ADDRESS:
      return { ...state, userloading: true };
    case ADD_SHIPIING_ADDRESS_SUCCESS:
      return { ...state, userloading: false, shippingAddressSaved: true };
    case UPDATE_SUCCESS:
      return { ...state, userloading: false, profileSaved: true };
    case FETCH_SHIPPING_ADDRESS_SUCCESS:
      return { ...state, shippingAddressBook: action.payload };
    default:
      return state;
  }
}
