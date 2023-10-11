// reducers/authReducer.js
import { LOGIN,SIGNUP } from "../ActionTypes/AuthTypes";
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        // Implement login logic here and set isAuthenticated and user in the state.
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case SIGNUP:
        // Implement signup logic here and update the state accordingly.
        return state;
      default:
        return state;
    }
  };
  
  export default authReducer;
  