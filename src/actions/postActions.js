import { ADD_POST, ADD_POST_ERROR } from './types';
import { firestoreConfigRef } from '../config/FirebaseConfig';

// getFirestore & getFirebase comes from destructuring of thunk.withExtraArgument({ getFirebase, getFirestore }).
export const addPost = (post) => (dispatch) => {
  // make async call to database
  firestoreConfigRef.collection('posts').add({   //add an object -> doc
    ...post,
    firstName: 'test',
    lastName: 'test2',
    authorId: 12345,
    createAt: new Date()       // return a promise and then(callback) 
  }).then(() => {
    dispatch({ type: ADD_POST, post: post })
  }).catch((err) => {
    dispatch({ type: ADD_POST_ERROR, err: err })
  })
};

