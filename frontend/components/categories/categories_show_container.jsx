import { connect } from 'react-redux';
import React from 'react';
import { fetchCategory, fetchCategories } from '../../actions/category_actions';
// import { fetchEvents } from '../../actions/event_actions';
import CategoriesShow from './categories_show.jsx';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const category = state.entities.categories[ownProps.match.params.id]
  const events = Object.values(state.entities.events)
  // const categories = state.entities.categories
  return {
    category,
    events
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCategory: id => dispatch(fetchCategory(id)),
  // fetchCategories: () => dispatch(fetchCategories())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesShow))
