import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/types';

const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS: ');
      return {
        ...state,
        authError: null
      };
    case LOGIN_ERROR:
      console.log('LOGIN_ERROR: ', action.err);
      return {
        ...state,
        authError: 'Login failed'
      };
    case SIGNOUT_SUCCESS:
      console.log('SIGNOUT_SUCCESS: ', action.err);
      return state;
    case SIGNUP_SUCCESS:
      console.log('SIGNUP_SUCCESS: ');
      return {
        ...state,
        authError: null
      };
    case SIGNUP_ERROR:
      console.log('SIGNUP_ERROR: ', action.err);
      return {
        ...state,
        authError: action.err.message    //invaild email, invaild password ...
      };
    default:
      return state;
  }
}

export default authReducer;