import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6s76MpG9mbSN8vYRN6vd4Kvo02SbA7N4",
  authDomain: "slackclone2020.firebaseapp.com",
  databaseURL: "https://slackclone2020.firebaseio.com",
  projectId: "slackclone2020",
  storageBucket: "slackclone2020.appspot.com",
  messagingSenderId: "867721573673",
  appId: "1:867721573673:web:3927de734cc19fb32d7338",
  measurementId: "G-3GZKY65DM6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
