import * as Types from "../actions/actionTypes";
import pawnsReducer from "./pawnsReducer";

export default function playerReducer(state = {}, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
        case Types.RED_LEAVE_BASE:
        case Types.MOVE_FORWARD:
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
            return {...state, pawns: pawnsReducer(state.pawns, action)};
        case Types.DID_MAKE_MOVE:
            return {...state, madeMove: action.flag};
        case Types.NEXT_PLAYER:
            return {...state, madeMove: false, throwDice: false};
        case Types.THROW_DICE:
            return {...state, throwDice: true};
        case Types.HAS_SECOND_MOVE:
            return {...state, throwDice: false, madeMove: false};
        default:
            return state;
    }
}