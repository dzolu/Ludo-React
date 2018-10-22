import * as Types from "../actions/actionTypes";
import playerReducer from './playerReducer';


export default function queueReducer(state = [], action) {
    switch (action.type) {
        case Types.NEXT_PLAYER:
        return [...action.queue.slice(1,action.queue.length),
                playerReducer(action.queue[0], action) ];
        case Types.ADD_ACTION:
        case Types.ADD_ACTION2:
        case Types.DID_MAKE_MOVE:   
        case Types.MOVE_FORWARD:    
        case Types.RED_LEAVE_BASE:
        case Types.BLUE_LEAVE_BASE:
        case Types.GREEN_LEAVE_BASE:
        case Types.YELLOW_LEAVE_BASE:
        case Types.RED_BACK_TO_BASE:
        case Types.BLUE_BACK_TO_BASE:
        case Types.GREEN_BACK_TO_BASE:
        case Types.YELLOW_BACK_TO_BASE:
        case Types.RED_MOVE_TO_HOME:
        case Types.BLUE_MOVE_TO_HOME:
        case Types.GREEN_MOVE_TO_HOME:
        case Types.YELLOW_MOVE_TO_HOME:
        case Types.THROW_DICE:
        case Types.HAS_SECOND_MOVE:
            return [playerReducer(state[0], action), ...state.slice(1)];
        default:
            return state;
    }
}