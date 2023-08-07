import * as Types from "../actions/actionTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
   switch (action.type) {
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.MOVE_FORWARD:
        case Types.BLUE_LEAVE_BASE:
        case Types.GREEN_LEAVE_BASE:
        case Types.YELLOW_LEAVE_BASE:
        case Types.RED_BACK_TO_BASE:
        case Types.BLUE_BACK_TO_BASE:
        case Types.GREEN_BACK_TO_BASE:
        case Types.YELLOW_BACK_TO_BASE:
        case Types.RED_MOVE_TO_HOME:
        case Types.BLUE_MOVE_TO_HOME:
        case Types.GREEN_MOVE_TO_HOME:
        case Types.YELLOW_MOVE_TO_HOME:
            return  updatePawnsArray(state, action); 
        default:
            return state;
    }
}

function updatePawnsArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.pawn.id) {
            return item;
        }
        return pawnReducer(action.pawn, action.type)    
    });
}