import * as Types from "../actions/actionTypes";
import {TYPE_BOARD } from '../../types/PositionTypes';
import * as AppSettings from "../../AppSettings";
import actionsReducer from './actionsReducer';
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, actions: actionsReducer(state.actions, action)};
        case Types.RED_LEAVE_BASE:
            return {...state,  positionIndex: AppSettings.RED_HOME_INDEX, positionType: TYPE_BOARD};
        case Types.NEXT_PLAYER:
            return {...state,  actions: actionsReducer(state.actions, action)};        
        default:
            return state;
    }
}