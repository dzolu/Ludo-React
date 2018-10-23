import Helper from '../Helper/Helper';
import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";
import {TYPE_BOARD, TYPE_HOME} from '../../types/PositionTypes';
import Notification from "../Notifications";
import Message from "../Messages";
import Queue from "../Queue";
import {TOTAL_POSITION_ON_BOARD} from "./../../AppSettings";
import {MOVE_TO_HOME} from "../../redux/actions/actionTypes";
import {CLEAN_AFTER_MOVE_FORWARD} from "../../redux/actions/actionTypes";

export function leaveBase(props) {
    const {
        pawn,
        result,
        gameBoard,
        actions
    } = props;
    if (!Helper.isInBase(pawn)) {
        return;
    }
    const startIndex = Helper.GetStartIndex(pawn.color);
    if (result && Helper.ableToMoveToPosition(pawn, gameBoard[startIndex])) {
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
        // TODO remove code form 25 to 36
        actions.addAction({
                type,
                pawn: {
                    ...pawn,
                    nextPositionType: TYPE_BOARD,
                    counterAfterMove: 0,
                    nextPositionIndex: startIndex
                }
            }
        )
    }
}

export function moveForward(props) {
    const {
        pawn,
        gameBoard,
        queue,
        actions
    } = props;
    if (!Helper.ableToMoveForward(pawn)) {
        return;
    }
    if (Helper.ableToMoveToPosition(pawn, gameBoard[pawn.nextPositionIndex])) {
        return
    }
    actions.addAction({
        type: Types.MOVE_FORWARD,
        pawn
    });

    //todo remove rest
    const pawnInDestination = gameBoard[pawn.nextPositionIndex];

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

    if (pawnInDestination.color !== pawn.color) {
        const type = Helper.createActionType(pawnInDestination.color, Types.BACK_TO_BASE);

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

    Notification.add({...props, message: Message.ownPawnInDestination(Queue.first(queue))})
}

export function moveToHome(props) {

    const {pawn, actions} = props;
    const nextPositionIndex = props.pawn.counterAfterMove - TOTAL_POSITION_ON_BOARD - 1;
    const newPawn = {...pawn, nextPositionIndex, nextPositionType: TYPE_HOME};

    if (!Helper.ableToMoveHome({...props, pawn})) {
        return;
    }
    const type = Helper.createActionType(pawn.color, MOVE_TO_HOME);
    actions.addAction(
        {type, pawn: {...pawn, nextPositionIndex, nextPositionType: TYPE_HOME}});
    // todo remove rest
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

export function unableToLeaveBase(props) {
    const {
        pawn,
        result,
        queue
    } = props;
    if (!Helper.isInBase(pawn)) {
        return;
    }
    if (result !== 6) {
        Notification.add({...props, message: Message.unableToLeaveHome({player: Queue.first(queue), result})});
    }

}

export function noPawnOnBoard() {
}

export function beatPawn(props) {
    const {
        pawn,
        gameBoard,
        actions
    } = props;
    const pawnInDestination = gameBoard[pawn.nextPositionIndex];
    if (!Helper.ableToMoveToPosition(pawn, pawnInDestination)) {
        return;
    }

    const type = Helper.createActionType(pawnInDestination.color, Types.BACK_TO_BASE);
    actions.addAction({
        type: Types.BEAT_PAWN,
        pawn: pawnInDestination
    });
    // todo remove all after
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
}

export function secondChance() {

}


export function win() {

}