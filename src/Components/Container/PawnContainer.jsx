import React from "react";
import {connect} from "react-redux";
import * as pawnActions from "./../../actions/pawnActions";
import {bindActionCreators} from "redux";
import Pawn from '../Presentation/Pawn';

const PawnContainer =(props)=>{
    return( <Pawn {...props}/>)
}

function mapStateToProps(state, ownProps) {
    return {
        gameBoard:state.gameBoard,
        baseBlue :state.baseBlue,
        baseGreen :state.baseGreen,
        baseYellow :state.baseYellow,
        baseRed :state.baseRed,
        homeBlue :state.homeBlue,
        homeGreen :state.homeGreen,
        homeYellow :state.homeYellow,
        homeRed :state.homeRed.actions,
        color: ownProps.color,
        id:  ownProps.id,
        positionIndex: ownProps.positionIndex 
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PawnContainer);