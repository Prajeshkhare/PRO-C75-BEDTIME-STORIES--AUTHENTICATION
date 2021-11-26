import firebase from 'firebase'
require('@firebase/firestore')
 var firebaseConfig = {
  apiKey: "AIzaSyCwUSPkZVKioT91zP4yaFLtEIQIYUhDSuc",
  authDomain: "willyapp-5b7b7.firebaseapp.com",
  projectId: "willyapp-5b7b7",
  storageBucket: "willyapp-5b7b7.appspot.com",
  messagingSenderId: "986823540928",
  appId: "1:986823540928:web:8092e410e3605117136d25"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()