import firebase from 'firebase';

require('firebase/firestore');

// Initialize Firebase
     var config = {
     apiKey: "AIzaSyCzUCuiFSUgFq0dzQ_H1Yih_0LNdHNB2Bc",
     authDomain: "employeeinfosystem.firebaseapp.com",
     databaseURL: "https://employeeinfosystem.firebaseio.com",
     projectId: "employeeinfosystem",
     storageBucket: "employeeinfosystem.appspot.com",
     messagingSenderId: "247386970069"
     };
     firebase.initializeApp(config);

export const db = firebase.database().ref();
export const gender = db.child('GenderLookUp');
export const profession = db.child('ProfessionLookUp');