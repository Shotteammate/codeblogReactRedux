import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxMZ_DhS1vWaQ9Y3KCy9R8kaUxNbRZrsQ",
  authDomain: "codeblog-70639.firebaseapp.com",
  databaseURL: "https://codeblog-70639.firebaseio.com",
  projectId: "codeblog-70639",
  storageBucket: "",
  messagingSenderId: "771021701286",
  appId: "1:771021701286:web:e3e63ffbd0701b46083467",
  measurementId: "G-X7HHVRYZNC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});   // firebase work with timestamp

export default firebase;