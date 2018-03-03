import { initializeApp } from 'firebase';
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyCzUCuiFSUgFq0dzQ_H1Yih_0LNdHNB2Bc',
  authDomain: 'employeeinfosystem.firebaseapp.com',
  databaseURL: 'https://employeeinfosystem.firebaseio.com',
  projectId: 'employeeinfosystem',
  storageBucket: 'employeeinfosystem.appspot.com',
  messagingSenderId: '247386970069',
});

export const db = app.database();
export const gender = db.ref('GenderLookUp');
export const profession = db.ref('ProfessionLookUp');
export const employee = db.ref('Employees');
export const user = db.ref('Users');
