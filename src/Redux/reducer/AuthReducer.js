// reducers/authReducer.js
import { LOGIN,LOGOUT,SIGNUP } from "../ActionTypes/AuthTypes";
const initialState = {
    isLoggedIn: false,
    user: []
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
       
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      case SIGNUP:
        return {
          ...state,
          user: action.payload,
        };

        case LOGOUT:
          return{
            ...state,
            isLoggedIn:false
          }
      default:
        return state;
    }
  };
  
  export default authReducer;
  