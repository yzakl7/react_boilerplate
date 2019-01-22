import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/';
import Firebase, { FirebaseContext } from './api';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <Main />
  </FirebaseContext.Provider>,
  document.getElementById('root'));
