import * as AppSettings from "./../../AppSettings";
class PawnFactory{
    static create(props){
        const {id,positionIndex,color, positionType, counter, result}=props;
        const nextPositionIndex= (positionIndex + result) % AppSettings.TOTAL_POSITION_ON_BOARD;
        const counterAfterMove=  counter + result;
        return {
            id,
            positionIndex,
            color,
            positionType,
            nextPositionIndex,
            counter,
            counterAfterMove
        }
    }
}

export default PawnFactory;