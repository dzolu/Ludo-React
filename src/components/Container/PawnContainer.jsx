import React from "react";
import {connect} from "react-redux";
import * as pawnActions from "../../redux/actions/pawnActions";
import {bindActionCreators} from "redux";
import Pawn from '../Presentation/Pawn';
import {TYPE_BOARD} from "../../types/PositionTypes";
import Application from '../../core/Application'
import actions from '../../redux/reducers/actionsReducer';
const PawnContainer = (props) => {
    const nextPlayer=()=>{
       return Object.keys(props.pawns).map(key=>{
           const pawn=props.pawns[key];
           return pawn.id===props.id ? {...pawn, positionType: props.positionType , positionIndex: props.positionIndex,actions: []} : {...pawn, actions: []};
      });
   
      }
    const move = () => {
        // if (props.actionName && props.actionName !== "") {
        //     props.actions.nextPlayer(nextPlayer());  
        //     props.actions.dispatchAction(props.actionName, props);
        //    if(props.positionType===TYPE_BOARD){
        //         props.actions.clearAfterMove(props);  
        //    }       
        // }
        Application.move(props);
    };
   
    return (<Pawn {...props} move={move}/>)
};

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.id,
        positionIndex: ownProps.positionIndex,
        positionType: ownProps.positionType,
        color: ownProps.color,
        actionsList: state.player.pawns[ownProps.id].actions, 
        pawns:state.player.pawns,
        result: state.diceResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PawnContainer);