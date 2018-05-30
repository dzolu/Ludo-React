import React from "react";
import {connect} from "react-redux";
import Dice from '../Presentation/Dice';
import * as diceActions from "./../../actions/diceActions";
import {bindActionCreators} from "redux";

const DiceContainer =(props)=>{
    return( <Dice {...props}/>)
}

function mapStateToProps(state) {
    return {
        result: state.diceResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(diceActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceContainer);