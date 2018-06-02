import * as Types from "../actions/actionTypes";

export default function baseRed(state = {}, action) {
    switch (action.type) {
        case Types.RED_LEAVE_BASE:
            return {...state, [action.pawn.id]: null};
        default:
            return state;
    }
}