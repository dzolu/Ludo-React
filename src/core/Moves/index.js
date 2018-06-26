import Queue from '../Queue';
import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
import Message from '../Messages';
import Notification from '../Notifications';
class Moves {
    static makeMove(props) {
            const pawn= Queue.getPawn(props);
            if(!pawn || !pawn.actions || !pawn.actions.length){ return;}
            if(pawn.actions[0].type=== UNABLE_TO_MOVE){ 
                return  Notification.notifyError(pawn.message);
            }
                pawn.actions.forEach(action => {
                    props.actions.dispatchAction(action.type, action.pawn);
                });
                Moves.nextPlayer(props);         
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
        actions.nextPlayer(queueNew);
        Notification.notifyInfo(Message.nextPlayer(Queue.first(queueNew)));
    }
}

export default Moves;