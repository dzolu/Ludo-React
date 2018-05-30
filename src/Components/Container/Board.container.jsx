import React from "react";
import {connect} from "react-redux";
import Board from '../Presentation/Board';
const BoardContainer =(props)=>{
    return( <Board {...props}/>)
}

function mapStateToProps(state) {
    return {
        gameBoard:state.gameBoard,
        baseBlue :state.baseBlue,
        baseGreen :state.baseGreen,
        baseYellow :state.baseYellow,
        baseRed :state.baseRed
    }
}


export default connect(mapStateToProps)(BoardContainer);