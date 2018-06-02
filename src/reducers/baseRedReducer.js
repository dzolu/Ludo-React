import * as Types from "./../actions/moveTypes";

export default function baseRed(state = {}, action) {
    switch (action.type) {
        case Types.RED_LEAVE_BASE:
            return {...state, [action.pawn.id]: null};
        case Types.ADD_ACTION:
            return {...state, [action.key]: action.pawn};
        default:
            return state;
    }
}