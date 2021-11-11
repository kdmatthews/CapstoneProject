import { DONATE_NOW } from "./actionTypes/DonationTypes";

const initialState = {

}

const donationData = (state=initialState, action) => {
    switch(action.type){
        case DONATE_NOW:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default donationData