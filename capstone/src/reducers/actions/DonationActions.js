import { DONATE_NOW } from "../actionTypes/donationTypes";

export const dispatchDonation = (dispatch, data) => {
    dispatch({type: DONATE_NOW, payload: data})
}