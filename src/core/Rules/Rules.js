import  rules from "./index"
import * as AppSettings from "./../../AppSettings";
import {
    TYPE_BASE,
    TYPE_BOARD,
    TYPE_HOME
} from "../../types/PositionTypes";

class Rules{
    static check(props){
        rules.forEach(rule=>{rule(props)})
    }

    static isOnBoard(pawn) {
        return pawn.positionType === TYPE_BOARD;
    }
    
    static isInHome(pawn) {
        return pawn.positionType === TYPE_HOME;
    }
    
    static isInBase(pawn) {
        return pawn.positionType === TYPE_BASE;
    }

    static createActionType(color, name) {
        return `${color.toUpperCase()}_${name}`;
    }
    static ableToMoveForward(pawn) {
        return Rules.isOnBoard(pawn) && pawn.counter <= AppSettings.TOTAL_POSITION_ON_BOARD;
    }
    static ableToMoveHome(pawn, home) {
        return !Rules.isInHome(pawn) && pawn.counter > AppSettings.TOTAL_POSITION_ON_BOARD && pawn.counter < 44 //&& !home[pawn.counter % AppSettings.TOTAL_POSITION_ON_BOARD ]
    }
    
}

export default Rules;