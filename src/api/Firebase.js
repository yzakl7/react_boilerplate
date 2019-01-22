import app from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
  apiKey: "AIzaSyCOXoXRM-SMLmVdjB9eM8Vl_ftYMC8qNu4",
  authDomain: "boilerplate-1ebd5.firebaseapp.com",
  databaseURL: "https://boilerplate-1ebd5.firebaseio.com",
  projectId: "boilerplate-1ebd5",
  storageBucket: "boilerplate-1ebd5.appspot.com",
  messagingSenderId: "1037517403035"
};

// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };

const config = prodConfig;
  // process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

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