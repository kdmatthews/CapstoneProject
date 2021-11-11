import { combineReducers } from "redux";
import Featured from "./featuredReducer";
import donationData from "./donationReducer";

export const rootReducer = combineReducers({
    Featured,
    donationData,
});
