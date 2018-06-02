import * as Types from "./../actions/moveTypes";
import {AppSettings} from "../AppSettings";
export default function gameBoard(state={}, action) {
    switch (action.type) {
        case Types.RED_LEAVE_BASE:
            return Object.assign({}, state, {[AppSettings.redHomeIndex]: action.pawn} ) ;
        default:
            return state;
    }
}
