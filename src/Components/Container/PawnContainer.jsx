import React from "react";
import {connect} from "react-redux";
import * as pawnActions from "./../../actions/pawnActions";
import {bindActionCreators} from "redux";
import Pawn from '../Presentation/Pawn';

const PawnContainer = (props) => {
    const move = () => {
        if (props.actionName && props.actionName !== "") {
            props.actions.dispatchAction(props.actionName, props)
        }

    };
    return (<Pawn {...props} move={move}/>)
};

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.id,
        positionIndex: ownProps.positionIndex,
        color: ownProps.color,
        actionName: state.player.pawns[ownProps.id].actionName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PawnContainer);