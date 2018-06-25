import  rules from "./index"
import * as AppSettings from "./../../AppSettings";
import {
    TYPE_BASE,
    TYPE_BOARD,
    TYPE_HOME
} from "../../types/PositionTypes";
import { TOTAL_POSITION_ON_BOARD } from '../../AppSettings';

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
    static getHome(props) {
        return props[`${props.pawn.color}Home`];
    }

    static getBase(color) {
        return `${color}Base`;
    }

    static ableToMoveForward(pawn) {
        return Rules.isOnBoard(pawn) && pawn.counterAfterMove <= AppSettings.TOTAL_POSITION_ON_BOARD;
    }

    static ableToMoveHome(props) {
        const home=Rules.getHome(props)
        const {pawn}=props;
        return !Rules.isInHome(pawn) && pawn.counterAfterMove > AppSettings.TOTAL_POSITION_ON_BOARD && pawn.counterAfterMove < 44 && !home[pawn.counterAfterMove - TOTAL_POSITION_ON_BOARD - 1 ]
    }   
}

export default Rules;