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

function getNextPosition(props, key) {
    return (props.player.pawns[key].positionIndex + props.result) % AppSettings.TOTAL_POSITION_ON_BOARD;
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


function unableToMove(props, pawn, reason) {
    const newPawn = Object.assign({}, ...pawn, reason)
    props.pawnActions.addAction({
        types: [{
            type: Types.UNABLE_TO_MOVE
        }],
        pawn: newPawn
    });
}

function leaveBase(key, props) {
    const {
        result,
        gameBoard,
        player
    } = props;
    const pawn = player.pawns[key];
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

function moveForward(key, props) {
    const {
        result,
        gameBoard,
        player
    } = props;
    const nextPositionIndex = getNextPosition(props, key);
    const pawn = Object.assign({}, player.pawns[key], {
        nextPositionIndex
    });
    const pawnInDestination = gameBoard[nextPositionIndex];
    if (isOnBoard(pawn)) {
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
        unableToMove(props, pawn, Messages.OWN_PAWN_IN_DESTINATION);
    }
}

function ableToMoveHome(pawn, gameBoard) {
    return pawn.counter > 39 && pawn.counter < 44 && !gameBoard[pawn.nextPositionIndex]
}

function moveToHome(key, props) {
    const pawn = Object.assign({}, props.player.pawns[key]);
    pawn.nextPositionIndex = pawn.counter % AppSettings.TOTAL_POSITION_ON_BOARD;
    if (ableToMoveHome(pawn)) {
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
        return;
    }
}


const rootRules = [leaveBase, moveForward, moveToHome];

export default rootRules;