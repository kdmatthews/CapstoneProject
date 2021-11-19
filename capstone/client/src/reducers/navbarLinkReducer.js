import { ON_LOGGED_IN } from "../action-types/navbar-types";

const initialState = {
  isLoggedIn: false,
};

const NavBar = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default NavBar;
