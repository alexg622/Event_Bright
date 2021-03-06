import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store';
import { signin } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const root = document.getElementById("root");
  const store = configureStore(preloadedState);
  window.store = store
  ReactDOM.render(<Root store={ store }/>, root)
})
