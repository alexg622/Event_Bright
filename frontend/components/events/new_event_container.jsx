import { connect } from 'react-redux';
import React from 'react';
import { createEvent, clearEventErrors} from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import NewEvent from './new_event';

const mapStateToProps = state => ({
  event: {title: "32434", img_url: "23rew", start_time: new Date(), end_time: new Date(),
  address: "213213", city: "213123", zipcode: "12323", price: 4545, details: "12323", category: 4, state: "CA"}, 
  errors: state.errors.event,
  categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  fetchCategories: () => dispatch(fetchCategories()),
  clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)
