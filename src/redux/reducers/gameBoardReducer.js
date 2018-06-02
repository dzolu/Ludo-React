import * as Types from "../actions/actionTypes";
import * as AppSettings from "../../AppSettings";

export default function gameBoard(state = {}, action) {
    switch (action.type) {
        case Types.RED_LEAVE_BASE:
            return {...state, [AppSettings.RED_HOME_INDEX]: action.pawn};
        default:
            return state;
    }
}
