import { connect } from 'react-redux';
import React from 'react';
import { fetchCategories } from '../../actions/category_actions';
import CategoriesIndex from './categories_index';

const mapStateToProps = state => ({
  categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);
