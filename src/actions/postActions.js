import { ADD_POST, ADD_POST_ERROR } from './types';
import { firestoreConfigRef } from '../config/FirebaseConfig';

// getFirestore & getFirebase comes from destructuring of thunk.withExtraArgument({ getFirebase, getFirestore }).
export const addPost = (post, proflie) => (dispatch, getState) => {
  // make async call to database
  //profile param is method 1, below is method 2 (to get user info.)
  const authorId = getState().firebaseRD.auth.uid;
  //console.log(proflie);

  firestoreConfigRef.collection('posts').add({   //add an object -> doc
    ...post,
    firstName: proflie.firstName, //method 1
    lastName: proflie.lastName,
    authorId: authorId,           //method 2
    createAt: new Date()       // return a promise and then(callback) 
  }).then(() => {
    dispatch({ type: ADD_POST, post: post })
  }).catch((err) => {
    dispatch({ type: ADD_POST_ERROR, err: err })
  })
};

