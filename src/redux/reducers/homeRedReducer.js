import {RED_MOVE_TO_HOME}  from "../actions/actionTypes";
import pawnReducer from './pawnReducer';

export default function homeRed(state = {}, action) {
    switch (action.type) {
        case RED_MOVE_TO_HOME:
            return { ...state,
                [action.pawn.nextPositionIndex]: pawnReducer(action.pawn, action)
            };
        default:
            return state;
    }
}