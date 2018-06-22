import * as Types from "../actions/actionTypes";
import playerReducer from './playerReducer';


export default function queueReducer(state = [], action) {
    switch (action.type) {
        case Types.NEXT_PLAYER:
            return [...action.queue];
        case Types.ADD_ACTION:
            return [playerReducer(state[0], action), ...state.slice(1)]; 
        default:
            return state;
    }
}