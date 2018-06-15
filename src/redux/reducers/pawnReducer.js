import * as Types from "../actions/actionTypes";
import { TYPE_BOARD, TYPE_BASE } from '../../types/PositionTypes';
import * as AppSettings from "../../AppSettings";
import actionsReducer from './actionsReducer';
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, actions: actionsReducer(state.actions, action)};
        case Types.MOVE_FORWARD:
            return {...state, positionIndex: action.pawn.nextPositionIndex};
        case Types.RED_LEAVE_BASE:
            return {...state,  positionIndex: AppSettings.RED_HOME_INDEX, positionType: TYPE_BOARD};
        case Types.YELLOW_BACK_TO_BASE:
            return {...state,  positionIndex: state.id, positionType: TYPE_BASE};
        case Types.NEXT_PLAYER:
            return {...state,  actions: actionsReducer(state.actions, action)};        
        default:
            return state;
    }
}