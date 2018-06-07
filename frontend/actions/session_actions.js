import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

// ______________________________
// export const createTodo = todo => dispatch => (
//   TodoAPIUtil.createTodo(todo)
//   .then(todo => { dispatch(receiveTodo(todo)); dispatch(clearSessionErrors())},
//   err => dispatch(receiveErrors(err.responseJSON)))
// );
// ______________________________

export const signin = user => dispatch => (
  APIUtil.signin(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const signout = () => dispatch => (
  APIUtil.signout().then(user => (
    dispatch(singoutCurrentUser())
  ))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const singoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
})

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})
