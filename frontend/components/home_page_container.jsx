import { connect } from 'react-redux';
import React from 'react';
import { fetchEvents } from '../actions/event_actions';
import HomePage from './home_page';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
