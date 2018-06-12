import { connect } from 'react-redux';
import React from 'react';
import { createEvent, fetchEvent, updateEvent, clearEventErrors} from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import UpdateEvent from './update_event'

const mapStateToProps = (state, ownProps) => {

  const  event = state.entities.events[parseInt(ownProps.match.params.id)]

  return {
    event: event,
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
