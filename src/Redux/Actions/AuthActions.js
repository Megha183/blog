// actions/authActions.js
import { LOGIN,SIGNUP } from "../ActionTypes/AuthTypes";

export const login = (userData) => {
    return {
      type: LOGIN,
      payload: userData,
    };
  };
  
  export const signup = (userData) => {
    return {
      type: SIGNUP,
      payload: userData,
    };
  };
  