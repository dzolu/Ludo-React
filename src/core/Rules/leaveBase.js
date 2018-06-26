import Rules from './Rules';
import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";
import { TYPE_BOARD} from '../../types/PositionTypes';
export default function leaveBase(props) {
    const {
        pawn,
        result,
        gameBoard
    } = props;
    if (!Rules.isInBase(pawn)) {
        return;
    }
    const startIndex=Rules.createActionType(pawn.color, AppSettings.START_INDEX);
    if ((result === 1 || result === 6) && !gameBoard[startIndex]) {
        const type = Rules.createActionType(pawn.color, Types.LEAVE_BASE);
        const newPawn=Object.assign({},{...pawn},{nextPositionType:TYPE_BOARD, counterAfterMove:0, nextPositionIndex: AppSettings[startIndex]})
        props.pawnActions.addAction({
            pawn:newPawn,
            types: [{
                type,
                pawn:newPawn
            }]
        });
    }
}