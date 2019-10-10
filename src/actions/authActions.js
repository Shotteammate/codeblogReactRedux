import firebase from 'firebase'; //getFirebase is no longer available if you are using v3 react-redux-firebase
import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';
import { firestoreConfigRef } from '../config/FirebaseConfig';

export const signIn = (credential) => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(
    credential.email,
    credential.password
  ).then(() => {
    dispatch({ type: LOGIN_SUCCESS })
  }).catch((err) => {
    dispatch({ type: LOGIN_ERROR, err: err })
  })
}

export const signOut = () => (dispatch) => {
  firebase.auth().signOut()
    .then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    })
}

export const signUp = (credential) => (dispatch) => {
  firebase.auth().createUserWithEmailAndPassword(credential.email, credential.password)
    .then((resp) => {
      return firestoreConfigRef.collection('users').doc(resp.user.uid).set({
        firstName: credential.firstName,
        lastName:credential.lastName,
        initials:credential.firstName[0]+credential.lastName[0]
      })
    })
    .then(()=>{
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR, err: err })
    })
}