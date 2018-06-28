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
        if(!props.queue || !props.queue[0] || !props.queue[0].pawns){
            return;
        }
        return {...props.queue[0].pawns[props.id]}
    }
    static getNextPlayer(queue){
    
        return {...queue[1]}
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