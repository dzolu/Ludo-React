import * as Types from "../actions/actionTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
   switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, [action.pawn.id]: pawnReducer(action.pawn, action)};
        case Types.RED_LEAVE_BASE:
            return {...state, [action.pawn.id]: pawnReducer(action.pawn, action)};
        case Types.NEXT_PLAYER:
            return {...state, [action.pawn.id]: pawnReducer(action.pawn, action)};
        default:
            return state;
    }
}