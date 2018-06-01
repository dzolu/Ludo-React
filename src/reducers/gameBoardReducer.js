import * as Types from "./../actions/moveTypes";
export default function gameBoard(state=[], action) {
    switch (action.type) {
        case Types.RED_ADD_TO_BOARD_FROM_BASE:
            return Object.assign({}, state, action.pawn ) ;
        default:
            return state;
    }
}
