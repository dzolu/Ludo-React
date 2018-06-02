import React, {Component} from "react";
import {connect} from "react-redux";
import Dice from '../Presentation/Dice';
import * as diceActions from "./../../actions/diceActions";
import {bindActionCreators} from "redux";
import Application from './../../Core/Application'
import * as pawnActions from "../../actions/pawnActions";
import * as playerActions from "../../actions/playerAction";

class DiceContainer extends Component {
    constructor(props) {
        super(props);
    }

    throwDice = () => {
        const result = Math.floor(Math.random() * (6)) + 1;
        this.props.actions.throwDice(result);

    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.result != this.props.result) {
            Application.analize(nextProps);
        }

    }

    render() {
        return (<Dice {...this.props} throwDice={this.throwDice}/>)
    }
}

function mapStateToProps(state) {
    return {
        gameBoard: state.gameBoard,
        baseBlue: state.baseBlue,
        baseGreen: state.baseGreen,
        baseYellow: state.baseYellow,
        baseRed: state.baseRed,
        homeBlue: state.homeBlue,
        homeGreen: state.homeGreen,
        homeYellow: state.homeYellow,
        homeRed: state.homeRed.actions,
        player: state.player,
        result: state.diceResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(diceActions, dispatch),
        pawnActions: bindActionCreators(pawnActions, dispatch),
        playerActions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceContainer);