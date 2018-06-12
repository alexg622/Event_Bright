import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";




export const createTicket = eventId => (
  APIUtil.createTicket(eventId)
)
