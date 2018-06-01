import { AppSettings } from './../AppSettings';
class Application {
    static moveRequest(props){
        if(!!props.gameBoard[AppSettings.redHomeIndex]) return console.log("jest juz pionek");
        props.actions.redLeaveBase({[props.positionIndex] : null }); 
        props.actions.addRedToBoardFromBase({[AppSettings.redHomeIndex]:{color:props.color, id: props.id, positionIndex : AppSettings.redHomeIndex}});
    } 

}

export default Application;