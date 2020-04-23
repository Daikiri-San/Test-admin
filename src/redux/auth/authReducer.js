// @flow
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILED,
} from "../../constants/actionTypes";

const INIT_STATE = {
  user: {
    name: "Иван Иванов",
  },
  loading: false,
};

const authAdminReducer = (state = INIT_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload, loading: false, error: null };
    case LOGIN_USER_FAILED:
      return { ...state, error: payload, loading: false };
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, user: payload, loading: false, error: null };
    case REGISTER_USER_FAILED:
      return { ...state, error: payload, loading: false };
    case LOGOUT_USER:
      return { ...state, user: null };
    case FORGET_PASSWORD:
      return { ...state, loading: true };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordResetStatus: payload,
        loading: false,
        error: null,
      };
    case FORGET_PASSWORD_FAILED:
      return { ...state, error: payload, loading: false };
    default:
      return { ...state };
  }
};

export default authAdminReducer;
