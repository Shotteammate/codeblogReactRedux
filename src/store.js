import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebaseConfig from './config/FirebaseConfig';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),// ??work
      logger
    ),
    reduxFirestore(firebaseConfig), // ??work
    reactReduxFirebase(firebaseConfig), //??work?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
