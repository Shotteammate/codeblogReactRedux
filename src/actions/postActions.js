import {ADD_POST} from './types';

export const addPost = (post) => (dispatch) => {
  // make async call to database
  dispatch({
    type: ADD_POST,
    post: post 
  })
};