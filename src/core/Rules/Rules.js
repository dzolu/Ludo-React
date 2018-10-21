import  rules from "./index"
import * as AppSettings from "./../../AppSettings";
import {
    TYPE_BASE,
    TYPE_BOARD,
    TYPE_HOME
} from "../../types/PositionTypes";
import { TOTAL_POSITION_ON_BOARD } from '../../AppSettings';
import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
import allPawnsInhome from "../Filters/allInHomeFilter";

class Rules{
    static check(props){
        rules.forEach(rule=>{rule(props)})
    }

    static isAbleToMove(pawn){
        if(!pawn){
            console.error("Wrong props. It does not contain the definition of pawn.");    
            return false;
        }
        if(!pawn.actions || !pawn.actions.length){
            return true;
        }
        return  pawn.actions[0].type!==UNABLE_TO_MOVE
    }
    static isOnBoard(pawn) {
        return pawn && pawn.positionType === TYPE_BOARD;
    }
    
    static isInHome(pawn) {
        return pawn && pawn.positionType === TYPE_HOME;
    }
    
    static isInBase(pawn) {
        return pawn && pawn.positionType === TYPE_BASE;
    }

    static createActionType(color, name) {
        return color && name && `${color.toUpperCase()}_${name}`;
    }
    static getHome(props) {
        if(!props || !props.pawn || !props.pawn.color){
            console.error("Wrong props. It does not contain the definition of pawn.")
        }
        return props[`${props.pawn.color}Home`];
    }

    static getBase(color) {
        return `${color}Base`;
    }

    static ableToMoveForward(pawn) {
        return Rules.isAbleToMove(pawn) && Rules.isOnBoard(pawn) && pawn.counterAfterMove <= AppSettings.TOTAL_POSITION_ON_BOARD;
    }

    static ableToMoveHome(props) {
        const home=Rules.getHome(props);
        const {pawn}=props;
        return !Rules.isInHome(pawn) && pawn.counterAfterMove > AppSettings.TOTAL_POSITION_ON_BOARD && pawn.counterAfterMove < 44 && !home[pawn.counterAfterMove - TOTAL_POSITION_ON_BOARD - 1 ]
    }  
    static gameOver(player){
        return player.pawns.filter(allPawnsInhome).length===4;
    } 

}

export default Rules;