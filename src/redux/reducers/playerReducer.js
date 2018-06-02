import * as Types from "../actions/actionTypes";
import pawnsReducer from "./pawnsReducer";

export default function playerReducer(state = {}, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, pawns: pawnsReducer(state.pawns, action)};
        default:
            return state;
    }
}