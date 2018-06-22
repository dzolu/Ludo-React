import * as Types from "../actions/actionTypes";
import pawnsReducer from "./pawnsReducer";

export default function playerReducer(state = {}, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.NEXT_PLAYER:
        case Types.MOVE_FORWARD:
            return {...state, pawns: pawnsReducer(state.pawns, action)};
        default:
            return state;
    }
}