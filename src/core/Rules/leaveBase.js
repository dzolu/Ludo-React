import Rules from './Rules';
import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";

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
        props.pawnActions.addAction({
            pawn,
            types: [{
                type,
                pawn
            }]
        });
    }
}