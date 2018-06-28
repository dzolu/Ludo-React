import rules from "./Rules/Rules";
import moves from "./Moves"
import PawnFactory from './Factories/PawnFactory';
import Queue from "./Queue";
import Message from './Messages';
import unableToMoveFilter from './Filters/unableToMoveFilter';
import Notification from './Notifications';
class Application {
    static analize(props) {
        const player=Queue.first(props.queue)
        if(!player){ return; }           
       player.pawns.forEach((item)=>{ 
                const pawn= PawnFactory.create({...item, result:props.result});     
                rules.check({...props, pawn});
            })
            
    }
    static move(props){
        props && moves.makeMove(props);
    }
    static analizeAfterPropsDidUpdate(props){
        const {queue, actions, result}=props
        const player=Queue.first(queue)
        if(player.pawns.filter(unableToMoveFilter).length===4){
            Notification.notifyInfo(Message.unableToMove({player, result}));
            const queueNew = Queue.add({queue:Queue.remove(queue), player}); 
            actions.nextPlayer(queueNew);
            Notification.notifyInfo(Message.nextPlayer(Queue.first(queueNew)));
            return;
        }
    }
}

export default Application;

