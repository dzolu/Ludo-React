import * as Types from "../actions/actionTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
   switch (action.type) {
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.NEXT_PLAYER:
        case Types.MOVE_FORWARD:
            return state.map((item,index)=>{
                return index === action.pawn.id ? pawnReducer(action.pawn, action): item; 
            }); 
        default:
            return state;
    }
}