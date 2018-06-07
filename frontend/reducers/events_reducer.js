import merge from 'lodash/merge';
import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';
// how do I receive authors
const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.events)
    case RECEIVE_EVENT:
      return merge({}, state, action.event)
    case REMOVE_EVENT:
      let nextState = merge({}, state)
      delete nextState[action.event.id]
      return nextState
    default:
      return state
  }
}

export default eventsReducer;
