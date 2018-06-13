class Moves{
    static makeMove(props){
         if (props.actionsList && props.actionsList.length) {
           // props.actions.nextPlayer(this.nextPlayer(props));  
                props.actionsList.forEach(action => {
            props.actions.dispatchAction(action.type, action.pawn);
           });       
        }
    }
    nextPlayer=(props)=>{
        return Object.keys(props.pawns).map(key=>{
            const pawn=props.pawns[key];
            return pawn.id===props.id ? {...pawn, positionType: props.positionType , positionIndex: props.positionIndex,actions: []} : {...pawn, actions: []};
       });
    
       }      
}

export default Moves;