import * as Types from "../actions/actionTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
   switch (action.type) {
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.MOVE_FORWARD:
            return {...state, [action.pawn.id]: pawnReducer(action.pawn, action)}
        default:
            return state;
    }
}