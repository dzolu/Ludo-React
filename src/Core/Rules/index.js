import {AppSettings} from "../../AppSettings";
import * as Types from "../../actions/actionTypes";

function createActionName(color, name) {
    return `${color.toUpperCase()}_${name}`;
}

function leaveHome(key, props) {
    const {result, gameBoard, player} = props;
    if ((result === 1 || result === 6) && !gameBoard[AppSettings.redHomeIndex]) {
        const actionName = createActionName(player.pawns[key].color, Types.LEAVE_BASE);
        props.playerActions.addLeaveBaseAction({id: key, actionName});
    }
}


const rootRules = [leaveHome];

export default rootRules;