import {
  UPDATE_USER_PROFILE,
  USER_PROFILE_FETCH_SUCCESS,
  INPUT_ON_CHANGE,
  UPDATE_SUCCESS,
  ADD_SHIPPING_ADDRESS,
  ADD_SHIPIING_ADDRESS_SUCCESS
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
  loading: false,
  profileSaved: false,
  shippingAddressSaved: false
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
    case ADD_SHIPPING_ADDRESS:
      return { ...state, loading: true };
    case ADD_SHIPIING_ADDRESS_SUCCESS:
      return { ...state, loading: false, shippingAddressSaved: true };
    case UPDATE_SUCCESS:
      return { ...state, loading: false, profileSaved: true };
    default:
      return state;
  }
}
