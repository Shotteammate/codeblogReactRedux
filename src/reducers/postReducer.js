import { ADD_POST, ADD_POST_ERROR } from '../actions/types';

const initialState = {
  posts: []         //delete dummy data since Dashboard mapState issue
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log("Add post", action.post);
      return state;
    case ADD_POST_ERROR:
      console.log("Add post error", action.err);
      return state;
    default:
      return state;
  }
}

export default postReducer;