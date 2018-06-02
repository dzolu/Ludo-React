import * as Types from "./../actions/playerTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
    switch (action.type) {
        case Types.ADD_LEAVE_BASE_ACTION:
            return {...state, [action.arg.id]: pawnReducer(state[action.arg.id], action)};
        default:
            return state;
    }
}