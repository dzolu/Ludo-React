import React from "react";
import {connect} from "react-redux";
import Dice from '../Presentation/Dice';
import * as diceActions from "./../../actions/diceActions";
import {bindActionCreators} from "redux";

const DiceContainer =(props)=>{
    const throwDice=()=>{
        const result=Math.floor(Math.random() * (6)) + 1;
        props.actions.throwDice(result);
    };
    return( <Dice {...props} throwDice={throwDice}/>)
};


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