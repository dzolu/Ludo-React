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
    if ((result === 1 || result === 6) && !gameBoard[AppSettings.RED_HOME_INDEX]) {
        const type = Rules.createActionType(pawn.color, Types.LEAVE_BASE);
        const newPawn=Object.assign({},{...pawn},{nextPositionType:TYPE_BOARD, counterAfterMove:0, nextPositionIndex: AppSettings[Rules.createActionType(pawn.color, AppSettings.HOME_INDEX)]})
        props.pawnActions.addAction({
            pawn:newPawn,
            types: [{
                type,
                pawn:newPawn
            }]
        });
    }
}