import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCOXoXRM-SMLmVdjB9eM8Vl_ftYMC8qNu4",
  authDomain: "boilerplate-1ebd5.firebaseapp.com",
  databaseURL: "https://boilerplate-1ebd5.firebaseio.com",
  projectId: "boilerplate-1ebd5",
  storageBucket: "boilerplate-1ebd5.appspot.com",
  messagingSenderId: "1037517403035"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;