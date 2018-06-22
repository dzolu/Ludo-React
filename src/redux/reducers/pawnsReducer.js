import * as Types from "../actions/actionTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
   switch (action.type) {
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.MOVE_FORWARD:
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
        return pawnReducer(action.pawn, action)    
    });
}