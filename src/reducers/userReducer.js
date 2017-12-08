import {
  UPDATE_USER_PROFILE,
  USER_PROFILE_FETCH_SUCCESS,
  PROFILE_ON_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  customerCode: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return { ...state };
    case USER_PROFILE_FETCH_SUCCESS:
      return action.payload;
    case PROFILE_ON_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.userInput };
    default:
      return state;
  }
}
