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
        return { ...array[0]
        };
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
}

export default Queue;