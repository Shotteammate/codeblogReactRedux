import {ADD_POST} from '../actions/types';

const initialState = {
  posts: [
    {id: 1, title: 'test1', content:'testing content 1'},
    {id: 2, title: 'test2', content:'testing content 2'},
    {id: 3, title: 'test3', content:'testing content 3'}
  ]
};

const postReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      console.log("Add post", action.post);
      return state;
    default:
      return state;
  }
} 

export default postReducer;