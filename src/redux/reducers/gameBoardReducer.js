import * as Types from "../actions/actionTypes";
import * as AppSettings from "../../AppSettings";
import pawnReducer, {boardPawnReducer} from './pawnReducer';

export default function gameBoard(state = {}, action) {
    switch (action.type) {
        case Types.RED_LEAVE_BASE:
            return { ...state,
                [AppSettings.RED_START_INDEX]: boardPawnReducer(action.pawn, action)
            };
        case Types.BLUE_LEAVE_BASE:
            return { ...state,
                [AppSettings.BLUE_START_INDEX]: {color: action.pawn.color, id: action.pawn.id}
            };
        case Types.GREEN_LEAVE_BASE:
            return { ...state,
                [AppSettings.GREEN_START_INDEX]: {color: action.pawn.color, id: action.pawn.id}
            };
        case Types.YELLOW_LEAVE_BASE:
            return { ...state,
                [AppSettings.YELLOW_START_INDEX]: {color: action.pawn.color, id: action.pawn.id}
            };
        case Types.MOVE_FORWARD:
            return { ...state,
                [action.pawn.nextPositionIndex]: pawnReducer(action.pawn, action)
            };
        case Types.CLEAN_AFTER_MOVE_FORWARD:
        case Types.YELLOW_BACK_TO_BASE:
        case Types.GREEN_BACK_TO_BASE:
        case Types.BLUE_BACK_TO_BASE:
        case Types.RED_BACK_TO_BASE:
            return { ...state,
                [action.pawn.positionIndex]: null
            };
        default:
            return state;
    }
}

