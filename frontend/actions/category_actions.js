import * as APIUtil from '../util/category_api_utils';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories().then(categories => dispatch(receiveAllCategories(categories)))
)

export const fetchCategory = id => dispatch => (
  APIUtil.fetchCategory().then(category => dispatch(receiveCategory(category)))
)

const receiveAllCategories = payload => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories: payload.categories
})

const receiveCategory = payload => ({
  type: RECEIVE_CATEGORY,
  category: payload.category,
  events: payload.events
})
