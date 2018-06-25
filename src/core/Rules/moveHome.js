import Rules from './Rules';
import {
    TYPE_HOME
} from '../../types/PositionTypes';
import {
    TOTAL_POSITION_ON_BOARD
} from "./../../AppSettings";
import { MOVE_TO_HOME, CLEAN_AFTER_MOVE_FORWARD } from '../../redux/actions/actionTypes';

export default function moveToHome(props) {
    const nextPositionIndex = props.pawn.counterAfterMove - TOTAL_POSITION_ON_BOARD - 1;
    const pawn= Object.assign({}, props.pawn, {nextPositionIndex, nextPositionType: TYPE_HOME});
    
    if (!Rules.ableToMoveHome({...props, pawn})) {
        return;
    }
    const type = Rules.createActionType(pawn.color, MOVE_TO_HOME);
        props.pawnActions.addAction({
        pawn,
        types: [{
                type,
                pawn
            },
            {
                type: CLEAN_AFTER_MOVE_FORWARD,
                pawn
            }
        ]
    });
}