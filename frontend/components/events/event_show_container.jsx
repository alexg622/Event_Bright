import { connect } from 'react-redux';
import React from 'react';
import { fetchEvent } from '../../actions/event_actions';
import EventShow from './event_show.jsx';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  const author = Object.values(state.entities.authors)[0]
  const categories = Object.values(state.entities.categories)
  return {
    event: state.entities.events[id],
    id,
    author,
    categories
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow))
