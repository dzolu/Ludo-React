import Queue from '../Queue';
class Moves {
    static makeMove(props) {
        if (props.queue) {
            const pawn= Queue.getPawn(props);
            Moves.nextPlayer({...props, pawn});
            pawn.actions.forEach(action => {
                props.actions.dispatchAction(action.type, action.pawn);
            });
        }
    }
    static nextPlayer = (props) => {
        const {
            queue,
            actions     
        } = props;
        const pawn = Queue.getPawn(props);
        const queueNew= Queue.add({queue:Queue.remove(queue), pawn}); 
        actions.nextPlayer(queueNew)
    }
}

export default Moves;