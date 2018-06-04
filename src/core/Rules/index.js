import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";
import * as Messages from "./../../types/MessagesTypes";
import {TYPE_BASE, TYPE_BOARD, TYPE_HOME} from "../../types/PositionTypes";

function createActionName(color, name) {
    return `${color.toUpperCase()}_${name}`;
}

function isOnBoard(pawn) {
    return pawn.positionType===TYPE_BOARD;
}

function isInHome(pawn) {
    return pawn.positionType===TYPE_HOME;
}

function isInBase(pawn) {
    return pawn.positionType===TYPE_BASE;
}

function leaveBase(key, props) {
    const {result, gameBoard, player} = props;
    const pawn = player.pawns[key];
    if (!isInBase(pawn)) {
        return;
    }
    if ((result === 1 || result === 6) && !gameBoard[AppSettings.RED_HOME_INDEX]) {
        const actionName = createActionName(pawn.color, Types.LEAVE_BASE);
        props.pawnActions.addAction({pawn, actionName});
    }
}

function moveForward(key, props) {
    const {result, gameBoard, player} = props;
    const pawn = player.pawns[key];
    const destination = gameBoard[pawn.positionIndex + result];
    if (isOnBoard(pawn)) {
        if (!destination) {
            const actionName = Types.MOVE_FORWARD;
            props.pawnActions.addAction({pawn, actionName});
            return;
        }
        // if (destination.color !== pawn.color) {
        //     const actionName = createActionName(pawn.color, Types.MOVE_FORWARD_WITH_BEAT);
        //     props.pawnActions.addAction({pawn, actionName});
        //     //tu chcesz dodac akcje na pionku w destynac
        //     const pawnToBeat=destination;
        //     destination.actions.addAction({id: destination.id, actionName: Types.BEAT_PAWN});
        //     return;
        // }

        props.pawnActions.addAction({
            id: key,
            actionName: Types.UNABLE_TO_MOVE,
            reason: Messages.OWN_PAWN_IN_DESTINATION
        });
    }
}

function moveToHome() {

}


const rootRules = [leaveBase, moveForward, moveToHome];

export default rootRules;