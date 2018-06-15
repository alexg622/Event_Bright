import { connect } from 'react-redux';
import React from 'react';
import { fetchEvents } from '../actions/event_actions';
import { fetchCategories } from '../actions/category_actions';
import HomePage from './home_page';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
