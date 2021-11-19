import { combineReducers } from "redux";
import Featured from "./featuredReducer";
import NavBar from "./navbarLinkReducer";

import donationData from "./donationReducer";

export const rootReducer = combineReducers({
    Featured,
    donationData,
     NavBar

});
