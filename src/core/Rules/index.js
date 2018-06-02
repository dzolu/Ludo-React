import * as AppSettings from "./../../AppSettings";
import * as Types from "../../redux/actions/actionTypes";

function createActionName(color, name) {
    return `${color.toUpperCase()}_${name}`;
}

function leaveBase(key, props) {
    const {result, gameBoard, player} = props;
    if ((result === 1 || result === 6) && !gameBoard[AppSettings.RED_HOME_INDEX]) {
        const actionName = createActionName(player.pawns[key].color, Types.LEAVE_BASE);
        props.playerActions.addLeaveBaseAction({id: key, actionName});
    }
}

function move() {

}
function move() {

}


const rootRules = [leaveBase];

export default rootRules;