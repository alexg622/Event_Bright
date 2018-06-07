import { connect } from 'react-redux';
import React from 'react';
import { createEvent} from '../../actions/event_actions';
import NewEvent from './new_event';

const mapStateToProps = state => ({
  event: {title: "", img_url: "", start_time: "", end_time: "",
  address: "", city: "", zipcode: "", price: "", details: ""},
  errors: state.errors.event
})

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)
