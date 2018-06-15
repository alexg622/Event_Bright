import { connect } from 'react-redux';
import React from 'react';
import { fetchCategory } from '../../actions/category_actions';
import CategoriesShow from './categories_show.jsx';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const category = state.entities.categories[ownProps.match.params.id]
  const events = Object.values(state.entities.events)
  return {
    category,
    events
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCategory: id => dispatch(fetchCategory(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesShow))
