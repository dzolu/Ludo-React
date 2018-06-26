import {
    BLUE_LEAVE_BASE,
    BLUE_BACK_TO_BASE
} from "../actions/actionTypes";
import pawnReducer from './pawnReducer';
export default function baseBlue(state = [], action) {
    switch (action.type) {
        case BLUE_LEAVE_BASE:
            return { ...state,
                [action.pawn.id]: null
            };
        case BLUE_BACK_TO_BASE:
            return { ...state,
                [action.pawn.id]: pawnReducer(action.pawn, action)
            };
        default:
            return state;
    }
}