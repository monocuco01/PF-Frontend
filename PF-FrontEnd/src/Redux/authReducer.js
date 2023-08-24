// authReducer.js
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    AUTH_ERROR,
  } from "./actions-types";
  
  const initialState = {
    token: null,
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          user: action.payload.user,
          error: null,
        };
      case AUTH_ERROR:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  