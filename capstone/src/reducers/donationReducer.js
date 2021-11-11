import { DONATE_NOW } from "./actionTypes/DonationTypes";

const initialState = {
    donations: 0

}

const donationData = (state=initialState, action) => {
    switch(action.type){
        case DONATE_NOW:
            return {donations: action.payload}
        default:
            return state
    }
}
export default donationData