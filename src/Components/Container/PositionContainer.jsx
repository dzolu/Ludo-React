import React from "react";
import {connect} from "react-redux";
import Position from '../Presentation/Position';
import * as positionActions from "./../../actions/positionActions";
import {bindActionCreators} from "redux";

const PositionContainer=(props)=>{
    return( <Position {...props}/>)
}

function mapStateToProps(state, ownProps) {
    return {
        pawn: ownProps.pawn,
        color: ownProps.color,
        type: ownProps.type,
        id:  ownProps.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(positionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionContainer);