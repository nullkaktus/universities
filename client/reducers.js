/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/UniReducer';
import intl from './modules/Intl/IntlReducer';
import countr from './modules/Post/CountryReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  countr,
});
