import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/event_ticket_actions';
import UsersShow from './users_show.jsx'


const mapStateToProps = state => ({
  event_tickets: Object.values(state.entities.event_tickets)
})

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow)
