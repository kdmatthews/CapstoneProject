import { ON_LOGGED_IN } from "../action-types/navbar-types";

export const OnLoggedIn = (dispatch) => {
  dispatch({ type: ON_LOGGED_IN });
};
