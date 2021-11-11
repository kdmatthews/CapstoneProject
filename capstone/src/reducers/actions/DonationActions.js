import { DONATE_NOW } from "../actionTypes/DonationTypes";

export const dispatchDonation = (dispatch, data) => {
    dispatch({type: DONATE_NOW, payload: data})
}