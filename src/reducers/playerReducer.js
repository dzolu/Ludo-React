import * as Types from "./../actions/playerTypes";
import pawnsReducer from "./pawnsReducer";

export default function playerReducer(state = {}, action) {
    switch (action.type) {
        case Types.LEAVE_BASE:
            return state;
        case Types.ADD_LEAVE_BASE_ACTION:
            return {...state, pawns: pawnsReducer(state.pawns, action)};
        case Types.CHANGE_PLAYER:
            return Object.assign({}, state, action.pawns);
        default:
            return state;
    }
}