import * as Types from "../actions/actionTypes";
import { TYPE_BOARD, TYPE_BASE, TYPE_HOME } from '../../types/PositionTypes';
import * as AppSettings from "../../AppSettings";
import actionsReducer from './actionsReducer';
import counterReducer from "./counterReducer";
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
        case Types.NEXT_PLAYER:
            return {...state, actions: actionsReducer(state.actions, action)};
        case Types.MOVE_FORWARD:
            return {...state, positionIndex: action.pawn.nextPositionIndex};
        case Types.RED_LEAVE_BASE:
            return {...state,  positionIndex: AppSettings.RED_HOME_INDEX, positionType: TYPE_BOARD, counter: counterReducer(state.counter, action)};
        case Types.YELLOW_BACK_TO_BASE:
            return {...state,  positionIndex: state.id, positionType: TYPE_BASE, counter: counterReducer(state.counter, action)};
        case   Types.RED_MOVE_TO_HOME:
            return {...state, positionIndex: action.pawn.nextPositionIndex, positionType: TYPE_HOME }     
        default:
            return state;
    }
}