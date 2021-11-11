import { combineReducers } from "redux";
import Featured from "./featuredReducer";
import NavBar from "./navbarLinkReducer";

export const rootReducer = combineReducers({
  Featured,
  NavBar,
});
