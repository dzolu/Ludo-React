import Queue from '../Queue';
class Moves {
    static makeMove(props) {
        if (props.actionsList && props.actionsList.length) {
            Moves.nextPlayer(props);
            props.actionsList.forEach(action => {
                props.actions.dispatchAction(action.type, action.pawn);
            });
        }
    }
    static nextPlayer = (props) => {
        const {
            queue,
            actions     
        } = props;
        const pawn= Object.assign({}, props.pawn, {actions:[]})
        const queueNew= Queue.add({queue:Queue.remove(queue), pawn}); 
        actions.nextPlayer(queueNew)
    }
}

export default Moves;