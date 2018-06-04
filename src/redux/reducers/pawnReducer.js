import * as Types from "../actions/actionTypes";
import {TYPE_BOARD } from '../../types/PositionTypes';
import * as AppSettings from "../../AppSettings";
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, actionName: action.arg.actionName};
        case Types.RED_LEAVE_BASE:
            return {...state,  positionIndex: AppSettings.RED_HOME_INDEX, positionType: TYPE_BOARD};
        default:
            return state;
    }
}