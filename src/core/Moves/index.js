class Moves {
    static makeMove(props) {
        if (props.actionsList && props.actionsList.length) {
            props.actionsList.forEach(action => {
                props.actions.dispatchAction(action.type, action.pawn);
            });
            props.actions.nextPlayer(Moves.nextPlayer(props));
        }
    }
    static nextPlayer = (props) => {
        return Object.keys(props.pawns).map(key => {
            const pawn = props.pawns[key];
            return pawn.id === props.id ? { ...pawn,
                positionType: props.positionType,
                positionIndex: props.positionIndex,
                actions: []
            } : { ...pawn,
                actions: []
            };
        });

    }
}

export default Moves;