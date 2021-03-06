import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_forms/signup_form_container.jsx';
import LoginFormContainer from './session_forms/login_form_container.jsx';
import NewEventContainer from './events/new_event_container.jsx';
import Modal from './modal';
import NavBarContainer from './nav_bar/nav_bar_container.jsx';
import EventIndexContainer from './events/events_index_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import HomePage from './home_page_container.jsx';
import EventShowContainer from './events/event_show_container.jsx';
import UpdateEventContainer from './events/update_event_container.jsx';
import UsersShowContainer from './users/users_show_container';
import TicketsFormContainer from './tickets/tickets_form_container';
import CategoriesShowContainer from './categories/categories_show_container';
import CategoriesIndexContainer from './categories/categories_index_container';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/users/:id' component={UsersShowContainer} />
      <Route exact path='/events/:eventId/tickets/new' component={TicketsFormContainer}/>
      <ProtectedRoute exact path="/events/new" component={NewEventContainer} />
      <AuthRoute exact path="/users/new" component={SignUpFormContainer} />
      <AuthRoute exact path="/session/new" component={LoginFormContainer} />
      <ProtectedRoute exact path="/events/:id/edit" component={UpdateEventContainer} />
      <Route exact path='/categories/:id' component={CategoriesShowContainer}/>
      <Route exact path='/categories' component={CategoriesIndexContainer}/>
      <Route exact path="/events/:id" component={EventShowContainer} />
      <Route path='/' component={HomePage} /> 
   </Switch>
  </div>
)

export default App;
