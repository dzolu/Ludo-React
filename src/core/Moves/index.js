import Queue from '../Queue';
class Moves {
    static makeMove(props) {
        if (props.queue) {
            const pawn= Queue.getPawn(props);
            if(pawn.actions && pawn.actions.length>0){
                pawn.actions.forEach(action => {
                    props.actions.dispatchAction(action.type, action.pawn);
                });
                Moves.nextPlayer(props);
            }
         
        }
    }
    static nextPlayer = (props) => {
        const {
            queue,
            actions     
        } = props;
        const pawn = Queue.getPawn(props);
        let player= Queue.first(queue);
        player=Object.assign({},player,{pawns:Queue.updatePawnsArray(player.pawns, pawn)});
        player=Object.assign({},player,{pawns: Queue.clearActions(player.pawns)})
        const queueNew = Queue.add({queue:Queue.remove(queue), player}); 
        actions.nextPlayer(queueNew)
    }
}

export default Moves;