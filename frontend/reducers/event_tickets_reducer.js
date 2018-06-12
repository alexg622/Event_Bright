import merge from 'lodash/merge';
import { RECEIVE_EVENT_TICKETS} from '../actions/event_ticket_actions';

const receiveEventTicketsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT_TICKETS:
      return merge({}, state, action.event_tickets)
    default:
      return state
  }
}

export default receiveEventTicketsReducer;
