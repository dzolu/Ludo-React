import Queue from '../Queue';
import {UNABLE_TO_MOVE} from '../../redux/actions/actionTypes';
import Notification from '../Notifications';

class Moves {
    static makeMove(props) {
        const pawn = Queue.getPawn(props);
        const {movement, message} = pawn;
        if (!movement || !movement.length) {
            return;
        }
        if (movement[0].type === UNABLE_TO_MOVE) {
            return Notification.notifyError(message);
        }
        movement.forEach(action => {
            props.actions.dispatchAction(action.type, action.pawn);
        });
        props.actions.didMakeMove(true);
    }
}

export default Moves;