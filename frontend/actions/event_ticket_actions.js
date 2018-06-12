import * as APIUtil from '../util/user_api_util';

export const RECEIVE_EVENT_TICKETS = "RECEIVE_EVENT_TICKETS";


export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(receiveEventTickets(user)))
)

const receiveEventTickets = payload =>({
  type: RECEIVE_EVENT_TICKETS,
  event_tickets: payload.event_tickets
})
