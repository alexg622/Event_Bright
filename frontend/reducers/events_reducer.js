import merge from 'lodash/merge';
import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions'
// how do I receive authors
const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.events)
    case RECEIVE_EVENT:
      return merge({}, state, action.event)
    case RECEIVE_CATEGORY:
      return merge({}, state, action.events)
    case REMOVE_EVENT:
      let nextState = merge({}, state)
      delete nextState[action.eventId]
      return nextState
    case RECEIVE_CATEGORY:
      return merge({}, action.events)
    default:
      return state
  }
}

export default eventsReducer;
