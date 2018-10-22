import Helper from '../Helper/Helper';
import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";
import {TYPE_BOARD} from '../../types/PositionTypes';

export default function leaveBase(props) {
    const {
        pawn,
        result,
        gameBoard
    } = props;
    if (!Helper.isInBase(pawn)) {
        return;
    }
    const startIndex = Helper.GetStartIndex(pawn.color);
    if ((result === 1 || result === 6) && !gameBoard[startIndex]) {
        const type = Helper.createActionType(pawn.color, Types.LEAVE_BASE);
        const newPawn = {
            ...pawn,
            nextPositionType: TYPE_BOARD,
            counterAfterMove: 0,
            nextPositionIndex: AppSettings[startIndex]
        };
        props.pawnActions.addAction({
            pawn: newPawn,
            types: [{
                type,
                pawn: newPawn
            }]
        });
    }
}