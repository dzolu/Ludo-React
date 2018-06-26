import {
    GREEN_LEAVE_BASE,
    GREEN_BACK_TO_BASE
} from "../actions/actionTypes";
import pawnReducer from './pawnReducer';
export default function baseGreen(state = [], action) {
    switch (action.type) {
        case GREEN_LEAVE_BASE:
            return { ...state,
                [action.pawn.id]: null
            };
        case GREEN_BACK_TO_BASE:
            return { ...state,
                [action.pawn.id]: pawnReducer(action.pawn, action)
            };
        default:
            return state;
    }
}