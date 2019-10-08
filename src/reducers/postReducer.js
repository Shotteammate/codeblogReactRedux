
const initialState = {
  posts: [
    {id: 1, title: 'test1', content:'testing content 1'},
    {id: 2, title: 'test2', content:'testing content 2'},
    {id: 3, title: 'test3', content:'testing content 3'}
  ]
};

const postReducer = (state = initialState, action) => {
  return state;
} 

export default postReducer;