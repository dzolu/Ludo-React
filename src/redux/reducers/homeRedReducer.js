import * as Types from "../actions/actionTypes";
import pawnReducer from './pawnReducer';

export default function homeRed(state = {}, action) {
    switch (action.type) {
        case Types.RED_MOVE_TO_HOME:
            return { ...state,
                [action.pawn.id]: pawnReducer(action.pawn, action)
            };
        default:
            return state;
    }
}