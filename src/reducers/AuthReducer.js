import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  loginError: "",
  loading: false,
  loginSuccess: false,
  AuthenticationToken:""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, loginError: "", loginSuccess: false };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, AuthenticationToken: action.token, loginSuccess: true, loading: false };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loginError: action.payload,
        password: "",
        loading: false,
      };
    default:
      return state;
  }
};
