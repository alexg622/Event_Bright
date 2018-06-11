import * as APIUtil from '../util/event_api_utils';
// using event.id for remove util not event
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents().then(events => (
    dispatch(receiveAllEvents(events))
  ), err => (
    dispatch(receiveEventErrors(err.responseJSON))
  ))
);

export const fetchEvent = (id) => dispatch => (
  APIUtil.fetchEvent(id).then(event => (
    dispatch(receiveEvent(event))
  ), err => (
    dispatch(receiveEventErrors(err.responseJSON))
  ))
);

export const createEvent = (event) => dispatch => (
  APIUtil.createEvent(event).then(event => (
    dispatch(receiveEvent(event))
  ), err => (
    dispatch(receiveEventErrors(err.responseJSON))
  ))
);

export const updateEvent = (event) => dispatch => (
  APIUtil.updateEvent(event).then(event => (
    dispatch(receiveEvent(event))
  ), err => (
    dispatch(receiveEventErrors(err.responseJSON))
  ))
);

// controller isn't sending back anything after destroying event
export const deleteEvent = (id) => dispatch => (
  APIUtil.deleteEvent(id).then(event => (
    dispatch(receiveEvent(event))
  ), err => (
    dispatch(receiveEventErrors(err.responseJSON))
  ))
);

const receiveAllEvents = payload => ({
  type: RECEIVE_ALL_EVENTS,
  events: payload.events,
  authors: payload.authors
})

const receiveEvent = payload => ({
  type: RECEIVE_EVENT,
  event: payload.event,
  author: payload.author,
  categories: payload.categories
})

const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId
})

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
})

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
})
