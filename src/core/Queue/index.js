class Queue {
    static add(props) {
        const {
            queue,
            record
        } = props;
        return [...queue, record]
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
}

export default Queue;