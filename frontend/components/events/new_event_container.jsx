import { connect } from 'react-redux';
import React from 'react';
import { createEvent, clearEventErrors} from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import NewEvent from './new_event';

const mapStateToProps = state => ({
  event: {title: "", img_url: "", start_time: "", end_time: "",
  address: "", city: "", zipcode: "", price: 0, details: "", category: 0, state: ""}, 
  errors: state.errors.event,
  categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  fetchCategories: () => dispatch(fetchCategories()),
  clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)
