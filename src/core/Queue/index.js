class Queue {
    static add(props) {
        const {
            queue,
            player
        } = props;
        return [...queue, player]
    }
    static remove(array) {
        return array.slice(1)
    }
    static first(array) {
        return { ...array[0]};
    }
    static last(array) {
        return { ...array[array.length - 1]
        };
    }
    static size(array) {
        return array.length;
    }
    static getPawn(props){
        return {...props.queue[0].pawns[props.id]}
    }
    static clearActions(array){
       return array.map((item)=>{
                return {...item, actions:[]}
        })
    }
    static updatePawnsArray(array, pawn) {
        return array.map( (item, index) => {
            if(index !== pawn.id) {
                return item;
            }
            return {...pawn, positionIndex: pawn.nextPositionIndex, positionType: pawn.nextPositionType, counter: pawn.counterAfterMove }    
        });
    }
}

export default Queue;