import rules from "../Rules/index"
import * as AppSettings from "../../AppSettings";
import {
    TYPE_BASE,
    TYPE_BOARD,
    TYPE_HOME
} from "../../types/PositionTypes";
import {BLUE_START_INDEX, GREEN_START_INDEX, TOTAL_POSITION_ON_BOARD, YELLOW_START_INDEX} from '../../AppSettings';
import {UNABLE_TO_MOVE} from '../../redux/actions/actionTypes';
import allPawnsInHome from "../Filters/allInHomeFilter";
import {COLOR_BLUE, COLOR_GREEN, COLOR_RED, COLOR_YELLOW} from "../../types/ColorTypes";
import {RED_START_INDEX} from "../../AppSettings";

class Helper {
    static check(props) {
        rules.forEach(rule => {
            rule(props)
        })
    }

    static isOneOrSix(diceNumber){
        return diceNumber === 1 || diceNumber ===6;
    }
    
    static ableToMoveToPosition(pawn, position) {
        return !position || position.color !== pawn.color;
    }

    static isAbleToMove(pawn) {
        if (!pawn) {
            return false;
        }
        if (!pawn.actions || !pawn.actions.length) {
            return true;
        }
        return pawn.actions[0].type !== UNABLE_TO_MOVE
    }
    static ableToMoveForward(pawn) {
        return Helper.isAbleToMove(pawn) && Helper.isOnBoard(pawn) && pawn.counterAfterMove <= AppSettings.TOTAL_POSITION_ON_BOARD;
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
        if (!props || !props.pawn || !props.pawn.color) {
            console.error("Wrong props. It does not contain the definition of pawn.")
        }
        return props[`${props.pawn.color}Home`];
    }

    static getBase(color) {
        return `${color}Base`;
    }



    static ableToMoveHome(props) {
        const home = Helper.getHome(props);
        const {pawn} = props;
        return !Helper.isInHome(pawn) && pawn.counterAfterMove > AppSettings.TOTAL_POSITION_ON_BOARD && pawn.counterAfterMove < 44 && !home[pawn.counterAfterMove - TOTAL_POSITION_ON_BOARD - 1]
    }

    static gameOver(player) {
        return player.pawns.filter(allPawnsInHome).length === 4;
    }

    static GetStartIndex(color) {
        switch (color) {
            case COLOR_RED:
                return RED_START_INDEX;
            case COLOR_BLUE:
                return BLUE_START_INDEX;
            case COLOR_GREEN:
                return GREEN_START_INDEX;
            case COLOR_YELLOW:
                return YELLOW_START_INDEX;
            default:
                return 0;
        }
    }

}

export default Helper;