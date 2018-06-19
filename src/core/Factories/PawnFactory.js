import * as AppSettings from "./../../AppSettings";
class PawnFactory{
    static create(props){
        const {id,positionIndex,color, positionType, counter, result}=props;
        const nextPositionIndex= (positionIndex + result) % AppSettings.TOTAL_POSITION_ON_BOARD;
        const counterIncremented=  counter + result;
        return {
            id,
            positionIndex,
            color,
            positionType,
            nextPositionIndex,
            counter:counterIncremented    
        }
    }
}

export default PawnFactory;