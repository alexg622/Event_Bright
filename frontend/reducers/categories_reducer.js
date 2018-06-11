import merge from 'lodash/merge';
import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, state, action.categories)
    case RECEIVE_CATEGORY:
      return merge({}, state, action.category)
    case RECEIVE_EVENT:
      return merge({}, state, action.categories)
    default:
      return state
  }
}

export default categoriesReducer;

// do I put the category events in the events reducer under receive_categories
