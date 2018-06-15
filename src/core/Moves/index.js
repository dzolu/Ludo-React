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
            pawns
        } = props;
        return Object.keys(pawns).map(key => {
            return props.actions.nextPlayer(pawns[key])
        });
    }
}

export default Moves;