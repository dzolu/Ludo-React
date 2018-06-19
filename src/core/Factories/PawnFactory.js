class PawnFactory{
    static create(props){
        const {id,positionIndex,color, positionType, counter, result}=props;
        const nextPositionIndex= positionIndex + result;
        return {
            id,
            positionIndex,
            color,
            positionType,
            nextPositionIndex,
            counter    
        }
    }
}

export default PawnFactory;