import * as Types from "../actions/actionTypes";
import {TYPE_HOME } from '../../types/PositionTypes';
import actionsReducer from './actionsReducer';
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, actions: actionsReducer(state.actions, action)};
        case Types.MOVE_FORWARD:
            return {...state, positionIndex: action.pawn.nextPositionIndex};
        case Types.RED_LEAVE_BASE:
            return {...state,  positionIndex: action.pawn.nextPositionIndex, positionType: action.pawn.nextPositionType, counter: state.counterAfterMove};
        case Types.YELLOW_BACK_TO_BASE:
            return {...state,  positionIndex: action.pawn.nextPositionIndex, positionType: action.pawn.nextPositionType, counter: state.counterAfterMove};
        case   Types.RED_MOVE_TO_HOME:
            return {...state, positionIndex: action.pawn.nextPositionIndex, positionType: TYPE_HOME }     
        default:
            return state;
    }
}