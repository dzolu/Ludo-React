import * as Types from "../actions/actionTypes";
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, movement: action.types};
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
            return {...state,  positionIndex: action.pawn.nextPositionIndex, positionType: action.pawn.nextPositionType, counter: action.pawn.counterAfterMove, movement:[]};  
        default:
            return state;
    }
}