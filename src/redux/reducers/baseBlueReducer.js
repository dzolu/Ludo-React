import {BLUE_LEAVE_BASE} from "../actions/actionTypes";
export default function baseBlue(state = [], action) {
    switch (action.type) {
        case BLUE_LEAVE_BASE:
            return {...state, [action.pawn.id]: null};
        default:
            return state;
    }
}