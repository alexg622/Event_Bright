import merge from 'lodash/merge';
import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT} from '../actions/event_actions';

const authorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.authors)
    case RECEIVE_EVENT:
      // debugger
      return merge({}, state, action.author)
    default:
      return state
  }
}

export default authorsReducer
