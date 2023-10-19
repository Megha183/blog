// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import blogReducer from './BlogReducer';
import tagReducer from './TagReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  tag:tagReducer
  // Add other reducers here if needed.
});

export default rootReducer;
