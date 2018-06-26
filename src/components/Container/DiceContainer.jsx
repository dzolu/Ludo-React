import React from "react";
import {connect} from "react-redux";
import Dice from '../Presentation/Dice';
import * as diceActions from "../../redux/actions/diceActions";
import {bindActionCreators} from "redux";
import Application from '../../core/Application'
import * as pawnActions from "../../redux/actions/pawnActions";


const DiceContainer = (props) => {
    const throwDice = () => {
        const result = Math.floor(Math.random() * (6)) + 1;
        props.actions.throwDice(result);
        Application.analize({...props, result: result});
    };


    return (<Dice {...props} throwDice={throwDice}/>)

};

function mapStateToProps(state) {
    return {
        gameBoard: state.gameBoard,
        blueBase: state.baseBlue,
        greenBase: state.baseGreen,
        yellowBase: state.baseYellow,
        redBase: state.baseRed,
        blueHome: state.homeBlue,
        greenHome: state.homeGreen,
        yellowHome: state.homeYellow,
        redHome: state.homeRed,
        result: state.diceResult,
        queue : state.queue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(diceActions, dispatch),
        pawnActions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceContainer);