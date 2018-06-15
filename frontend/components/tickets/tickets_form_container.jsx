import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createTicket } from '../../actions/ticket_actions.js';
import TicketsForm from './tickets_form.jsx';

const mapDispatchToProps = dispatch => {
  return {
    createTicket: eventId => dispatch(createTicket(eventId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(TicketsForm)
