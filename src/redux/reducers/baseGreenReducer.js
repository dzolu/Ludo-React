import {GREEN_LEAVE_BASE} from "../actions/actionTypes";
export default function baseGreen(state = [], action) {
    switch (action.type) {
        case GREEN_LEAVE_BASE:
            return {...state, [action.pawn.id]: null};
        default:
            return state;
    }
}

