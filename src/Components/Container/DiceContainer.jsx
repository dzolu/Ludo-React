import React from "react";
import {connect} from "react-redux";
import Dice from '../Presentation/Dice';
const DiceContainer =(props)=>{
    return( <Dice {...props}/>)
}

function mapStateToProps(state) {
    return {
        result: state.diceResult
    }
}


export default connect(mapStateToProps)(DiceContainer);