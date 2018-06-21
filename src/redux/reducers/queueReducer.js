import * as Types from "../actions/actionTypes";
import pawnsReducer from "./pawnsReducer";

export default function queueReducer(state = [], action) {
    switch (action.type) {
        case Types.NEXT_PLAYER:
            return state;     
        default:
            return state;
    }
}