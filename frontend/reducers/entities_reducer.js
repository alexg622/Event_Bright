import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import authorsReducer from './authors_reducer';
import categoriesReducer from './categories_reducer';
import receiveEventTicketsReducer from './event_tickets_reducer'

export default combineReducers({
  users: usersReducer,
  events: eventsReducer,
  authors: authorsReducer,
  categories: categoriesReducer,
  event_tickets: receiveEventTicketsReducer
})
