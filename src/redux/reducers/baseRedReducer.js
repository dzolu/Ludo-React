import {
    RED_LEAVE_BASE,
    RED_BACK_TO_BASE
} from "../actions/actionTypes";
import pawnReducer from './pawnReducer';

export default function baseRed(state = {}, action) {
    switch (action.type) {
        case RED_LEAVE_BASE:
            return { ...state,
                [action.pawn.id]: null
            };
        case RED_BACK_TO_BASE:
            return { ...state,
                [action.pawn.id]: pawnReducer(action.pawn, action)
            };
        default:
            return state;
    }
}