import React from "react";
import {connect} from "react-redux";
import * as pawnActions from "../../redux/actions/pawnActions";
import {bindActionCreators} from "redux";
import Pawn from '../Presentation/Pawn';
import Application from '../../core/Application'
import Queue from '../../core/Queue';
import Notification from "../../core/Notifications";
import Message from '../../core/Messages';
const PawnContainer = (props) => {
    const move = () => {
        const player = Queue.first(props.queue);
        if(props.color !== player.color){
           return Notification.notifyError(Message.wrongPawn(player));
        }
        Application.move(props);
    };
    return (<Pawn {...props} move={move}/>)
};

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.id,
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