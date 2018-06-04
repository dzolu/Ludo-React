import React from "react";
import {connect} from "react-redux";
import * as pawnActions from "../../redux/actions/pawnActions";
import {bindActionCreators} from "redux";
import Pawn from '../Presentation/Pawn';

const PawnContainer = (props) => {
    const nextPlayer=()=>{
       return Object.keys(props.pawns).map(key=>{
         return {...props.pawns[key], actionName:""};
      });
   
      }
    const move = () => {
        if (props.actionName && props.actionName !== "") {
            props.actions.dispatchAction(props.actionName, props);
            props.actions.nextPlayer(nextPlayer());
          
        }

    };
   
    return (<Pawn {...props} move={move}/>)
};

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.id,
        positionIndex: ownProps.positionIndex,
        positionType: ownProps.positionType,
        color: ownProps.color,
        actionName: state.player.pawns[ownProps.id].actionName, 
        pawns:state.player.pawns
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PawnContainer);