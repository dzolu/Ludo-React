import Queue from '../Queue';
import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
import Message from '../Messages';
import Notification from '../Notifications';
class Moves {
    static makeMove(props) {
        const pawn= Queue.getPawn(props)
        const {movement, message}=pawn;
            if(!movement || !movement.length){
                return;
            }
            if(movement[0].type=== UNABLE_TO_MOVE){ 
                return  Notification.notifyError(message);
            }
            movement.forEach(action => {
                props.actions.dispatchAction(action.type, action.pawn);
            });
            props.actions.didMakeMove(true)
               //Moves.nextPlayer(props);         
    }
    static nextPlayer = (props) => {
        const {
            queue,
            actions     
        } = props;
        const pawn = Queue.getPawn(props);
        let player= Queue.first(queue);
        //next stage will be move update Pawns array to reducer
        player={...player, pawns:Queue.updatePawnsArray(player.pawns, pawn)};
        player={...player, pawns: Queue.clearActions(player.pawns)};
        const queueNew = Queue.add({queue:Queue.remove(queue), player}); 
        actions.nextPlayer(queue);
        Notification.notifyInfo(Message.nextPlayer(Queue.first(queue)));
    }
}

export default Moves;