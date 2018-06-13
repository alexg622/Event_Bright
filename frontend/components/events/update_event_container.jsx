import { connect } from 'react-redux';
import React from 'react';
import { createEvent, fetchEvent, updateEvent, clearEventErrors} from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import UpdateEvent from './update_event'

const mapStateToProps = (state, ownProps) => {

  const  event = state.entities.events[ownProps.match.params.id]
  const blankEvent = {title: "32434", img_url: "23rew", start_time: new Date(), end_time: new Date(),
  address: "213213", city: "213123", zipcode: "12323", price: 4545, details: "12323", category: 4, state: "CA"}
  return {
    event: event || blankEvent,
    errors: state.errors.event,
    categories: Object.values(state.entities.categories)
  }
}

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  fetchCategories: () => dispatch(fetchCategories()),
  clearEventErrors: () => dispatch(clearEventErrors()),
  fetchEvent: id => dispatch(fetchEvent(id)),
  updateEvent: event => dispatch(updateEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEvent)
