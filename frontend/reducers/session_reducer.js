import {RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (preloadedState = _nullUser, action) => {
  Object.freeze(preloadedState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    // currentUser.id.id???
      return {currentUser: action.currentUser}
    case SIGNOUT_CURRENT_USER:
      return _nullUser
    default:
      return preloadedState
  }
}

export default sessionReducer;
