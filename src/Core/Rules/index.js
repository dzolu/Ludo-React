import {AppSettings} from "../../AppSettings";
function createActionName(color,name) {
    return `${color}${name}`;
}
function leaveHome(key, props){
    const{result, gameBoard, player}=props;
    if((result===1 || result===6) && !gameBoard[AppSettings.redHomeIndex]) {
         const actionName=createActionName(player.pawns[key].color, "AddLeaveBaseAction");
         props.playerActions.addLeaveBaseAction({id:key, actionName});
    }
}




const rootRules=[leaveHome];

export default rootRules;