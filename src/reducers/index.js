import {combineReducers} from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
  authRD: authReducer,
  postRD: postReducer,
  firestoreRD: firestoreReducer,
  firebaseRD: firebaseReducer     // firebase Auth services
});