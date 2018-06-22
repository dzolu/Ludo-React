import * as Types from "../actions/actionTypes";
export default function pawnReducer(state, action) {
    switch (action.type) {
        case Types.ADD_ACTION:
            return {...state, actions: action.types};
        case Types.MOVE_FORWARD:
            return {...state, positionIndex: action.pawn.nextPositionIndex, counter: state.counterAfterMove};
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
            return {...state,  positionIndex: action.pawn.nextPositionIndex, positionType: action.pawn.nextPositionType, counter: state.counterAfterMove};  
        default:
            return state;
    }
}