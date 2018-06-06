import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_forms/signup_form_container.jsx';
import LoginFormContainer from './session_forms/login_form_container.jsx';
import NavBarContainer from './nav_bar/nav_bar_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
     <AuthRoute exact path="/users/new" component={SignUpFormContainer} />
     <AuthRoute exact path="/session/new" component={LoginFormContainer} />
   </Switch>
  </div>
)

export default App;
