import Queue from '../Queue';
import {UNABLE_TO_MOVE} from '../../redux/actions/actionTypes';
import Notification from '../Notifications';

class Moves {
    static makeMove(props) {
        const pawn = Queue.getPawn(props);
        const {movement, message} = pawn;
        if (!movement) {
            return;
        }
        if (movement.type === UNABLE_TO_MOVE) {
            return Notification.notifyError(message);
        }
        props.actions.dispatchAction(movement, {pawn});
        
        props.actions.didMakeMove(true);
    }
}

export default Moves;