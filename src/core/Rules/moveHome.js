import Rules from './Rules';
import {
    TYPE_HOME,
    MOVE_TO_HOME,
    CLEAN_AFTER_MOVE_FORWARD
} from '../../types/PositionTypes';
import {
    TOTAL_POSITION_ON_BOARD
} from "./../../AppSettings";

export default function moveToHome(props) {
    const {
        pawn
    } = props;
    if (!Rules.ableToMoveHome(pawn, props["homeRed"])) {
        return;
    }
    const type = Rules.createActionType(pawn.color, MOVE_TO_HOME);
    const nextPositionIndex = pawn.counter - TOTAL_POSITION_ON_BOARD - 1;
    const newPawn = Object.assign({}, { ...pawn
    }, {
        nextPositionType: TYPE_HOME,
        nextPositionIndex
    })

    props.pawnActions.addAction({
        pawn: newPawn,
        types: [{
                type,
                pawn: newPawn
            },
            {
                type: CLEAN_AFTER_MOVE_FORWARD,
                pawn: newPawn
            }
        ]
    });
}