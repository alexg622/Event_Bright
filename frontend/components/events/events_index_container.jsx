import { connect } from 'react-redux';
import React from 'react';
import { fetchEvents } from '../../actions/event_actions';
import EventIndex from './event_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  authors: Object.values(state.entities.authors)
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventIndex));
