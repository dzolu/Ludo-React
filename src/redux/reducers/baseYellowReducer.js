import {YELLOW_LEAVE_BASE, YELLOW_BACK_TO_BASE} from "../actions/actionTypes";
import pawnReducer from './pawnReducer';

export default function baseYellow(state = [], action) {
    switch (action.type) {
        case YELLOW_LEAVE_BASE:
            return { ...state,
                [action.pawn.id]: null
            };
        case YELLOW_BACK_TO_BASE:
            return { ...state,
                [action.pawn.id]: pawnReducer(action.pawn, action)
            };
        default:
            return state;
    }

}