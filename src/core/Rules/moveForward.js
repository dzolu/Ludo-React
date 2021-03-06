import Rules from './Rules';
import * as Types from "../../redux/actions/actionTypes";
import Notification from '../Notifications';
import Message from '../Messages';
import Queue from '../Queue';



export default function moveForward(props) {
    const {
        pawn,
        gameBoard, 
        queue
    } = props;
    if (!Rules.ableToMoveForward(pawn)) {
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
        const type = Rules.createActionType(pawnInDestination.color, Types.BACK_TO_BASE);

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