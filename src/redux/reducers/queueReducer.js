import * as Types from "../actions/actionTypes";
import pawnsReducer from './pawnsReducer';
import playerReducer from './playerReducer';


export default function queueReducer(state = [], action) {
    switch (action.type) {
        case Types.NEXT_PLAYER:
            return state;
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.MOVE_FORWARD:
            return [playerReducer(state[0], action), ...state.slice(1)]; 
        default:
            return state;
    }
}