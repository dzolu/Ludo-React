import * as Types from "./../actions/moveTypes";

export default function baseRed(state={}, action) {
    switch (action.type) {
        case Types.RED_LEAVE_BASE:
            return Object.assign({}, state, action.pawn ) ;
        default:
            return state;
    }
}