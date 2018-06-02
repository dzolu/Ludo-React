import * as Types from "../actions/actionTypes";
import pawnReducer from "./pawnReducer";

export default function pawnsReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, [action.arg.id]: pawnReducer(state[action.arg.id], action)};
        default:
            return state;
    }
}