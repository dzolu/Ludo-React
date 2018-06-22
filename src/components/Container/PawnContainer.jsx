import React from "react";
import {connect} from "react-redux";
import * as pawnActions from "../../redux/actions/pawnActions";
import {bindActionCreators} from "redux";
import Pawn from '../Presentation/Pawn';
import Application from '../../core/Application'
const PawnContainer = (props) => {
    const move = () => {
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
        result: state.diceResult, 
        queue: state.queue, 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PawnContainer);