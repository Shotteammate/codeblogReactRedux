import {combineReducers} from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import {firestoreReducer} from 'redux-firestore';

export default combineReducers({
  authRD: authReducer,
  postRD: postReducer,
  firestoreRD: firestoreReducer
});