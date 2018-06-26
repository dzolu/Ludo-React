import React from "react";
import {connect} from "react-redux";
import Board from '../Presentation/Board';
const BoardContainer =(props)=>{
    return( <Board {...props}/>)
};

function mapStateToProps(state) {
    return {
        gameBoard:state.gameBoard,
        blueBase: state.baseBlue,
        greenBase: state.baseGreen,
        yellowBase: state.baseYellow,
        redBase: state.baseRed,
        blueHome: state.homeBlue,
        greenHome: state.homeGreen,
        yellowHome: state.homeYellow,
        redHome: state.homeRed,
    }
}


export default connect(mapStateToProps)(BoardContainer);