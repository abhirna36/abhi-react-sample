import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from "./types";
import * as dataService from "../networkLayer/ApiService";
import { getNewPassword } from "../util/utils";

export const loginUser = ({ username, password }) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_USER,
    });
    try {
      // const user = await Auth.signIn(username, password);
      // if (user) {
      //   if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      //     let newPassword = getNewPassword(username);
      //     // Add api call
      //     const response = "";
      //     // const response = await Auth.completeNewPassword(user, newPassword);
      //     dispatch({
      //       type: LOGIN_USER_SUCCESS,
      //       token: response.signInUserSession.idToken.jwtToken,
      //     });
      //   } else if (!user.challengeName) {
      //     dispatch({
      //       type: LOGIN_USER_SUCCESS,
      //       token: user.signInUserSession.idToken.jwtToken,
      //     });
      //   } else {
      //     dispatch({
      //       type: LOGIN_USER_FAIL,
      //       payload: user,
      //     });
      //   }
      // }
    } catch (err) {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: err.message,
      });
    }
  };
};
