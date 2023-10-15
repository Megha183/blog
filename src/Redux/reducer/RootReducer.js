// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import blogReducer from './BlogReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  // Add other reducers here if needed.
});

export default rootReducer;
