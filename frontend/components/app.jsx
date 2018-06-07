import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_forms/signup_form_container.jsx';
import LoginFormContainer from './session_forms/login_form_container.jsx';
import NavBarContainer from './nav_bar/nav_bar_container.jsx';
import EventIndexContainer from './events/events_index_container.jsx'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={EventIndexContainer} />
     <AuthRoute exact path="/users/new" component={SignUpFormContainer} />
     <AuthRoute exact path="/session/new" component={LoginFormContainer} />
     <Route exact path="/events" component={EventIndexContainer} />
   </Switch>
  </div>
)

export default App;
