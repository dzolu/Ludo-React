import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";
import * as Messages from "./../../types/MessagesTypes";
import {
    TYPE_BASE,
    TYPE_BOARD,
    TYPE_HOME
} from "../../types/PositionTypes";

function createActionType(color, name) {
    return `${color.toUpperCase()}_${name}`;
}

function isOnBoard(pawn) {
    return pawn.positionType === TYPE_BOARD;
}

function isInHome(pawn) {
    return pawn.positionType === TYPE_HOME;
}

function isInBase(pawn) {
    return pawn.positionType === TYPE_BASE;
}


function unableToMove(props) {
    const {
        pawn,
        actions,
        reason
    } = props;
    const newPawn = Object.assign({}, ...pawn, reason)
    actions.addAction({
        types: [{
            type: Types.UNABLE_TO_MOVE
        }],
        pawn: newPawn
    });
}

function leaveBase(props) {
    const {
        pawn,
        result,
        gameBoard
    } = props;
    if (!isInBase(pawn)) {
        return;
    }
    if ((result === 1 || result === 6) && !gameBoard[AppSettings.RED_HOME_INDEX]) {
        const type = createActionType(pawn.color, Types.LEAVE_BASE);
        props.pawnActions.addAction({
            pawn,
            types: [{
                type,
                pawn
            }]
        });
    }
}

function ableToMoveForward(pawn) {
    return isOnBoard(pawn) && pawn.counter <= AppSettings.TOTAL_POSITION_ON_BOARD;
}

function moveForward(props) {
    const {
        pawn,
        gameBoard
    } = props;
    if (!ableToMoveForward(pawn)) {
        return;
    }
    const pawnInDestination = gameBoard[pawn.nextPositionIndex];

    if (!pawnInDestination) {
        props.pawnActions.addAction({
            pawn,
            types: [{
                    type: Types.MOVE_FORWARD,
                    pawn
                },
                {
                    type: Types.CLEAN_AFTER_MOVE_FORWARD,
                    pawn
                }
            ]
        });
        return;
    }
    if (pawnInDestination.color !== pawn.color) {
        const type = createActionType(pawnInDestination.color, Types.BACK_TO_BASE);

        props.pawnActions.addAction({
            pawn,
            types: [{
                    type,
                    pawn: pawnInDestination
                }, {
                    type: Types.MOVE_FORWARD,
                    pawn
                },
                {
                    type: Types.CLEAN_AFTER_MOVE_FORWARD,
                    pawn
                }
            ]
        });
        return;
    }
    unableToMove({
        actions: props.actions,
        pawn,
        reason: Messages.OWN_PAWN_IN_DESTINATION
    });

}

function ableToMoveHome(pawn, home) {
    return !isInHome(pawn) && pawn.counter > AppSettings.TOTAL_POSITION_ON_BOARD && pawn.counter < 44 //&& !home[pawn.counter % AppSettings.TOTAL_POSITION_ON_BOARD ]
}

function moveToHome(props) {
    const {
        pawn
    } = props;
    if (!ableToMoveHome(pawn, props["homeRed"])) {
        return;
    }
    const type = createActionType(pawn.color, Types.MOVE_TO_HOME);
    props.pawnActions.addAction({
        pawn,
        types: [{
                type,
                pawn
            },
            {
                type: Types.CLEAN_AFTER_MOVE_FORWARD,
                pawn
            }
        ]
    });
}


const rootRules = [leaveBase, moveForward, moveToHome];

export default rootRules;