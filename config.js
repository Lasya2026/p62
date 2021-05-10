import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAeWWIRXjo0hLOShstKkb0ed8rctWobiPc",
    authDomain: "project60-8b202.firebaseapp.com",
    databaseURL: "https://project60-8b202-default-rtdb.firebaseio.com",
    projectId: "project60-8b202",
    storageBucket: "project60-8b202.appspot.com",
    messagingSenderId: "796164851905",
    appId: "1:796164851905:web:df6171bb624a4a1688ac40",
    measurementId: "G-VCPHNKXEQB"
  };
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
  

