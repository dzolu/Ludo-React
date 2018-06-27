import React, {Component} from "react";
import BoardContainer from "./Board.container";
import DiceContainer from "./DiceContainer";
import { ToastContainer } from "react-toastify";
import {connect} from "react-redux";
import Notification from "../../core/Notifications";
import Message from '../../core/Messages';
import Queue from '../../core/Queue';
import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
import * as pawnActions from "../../redux/actions/pawnActions";
import {bindActionCreators} from "redux";
import Application from '../../core/Application';

class Game extends Component{
        componentDidMount() {
          Notification.notifyInfo(Message.gameBegin(Queue.first(this.props.queue)));
        }
        componentDidUpdate(prevProps){
            const player=Queue.first(this.props.queue)
            const prevPlayer= Queue.first(prevProps.queue)
           if(player.id !== prevPlayer.id){
               return;
           }
           Application.analizeAfterPropsDidUpdate(this.props);
           
        }
      
        unableToMoveFilter(pawn){
            if(!pawn.actions || !pawn.actions.length ){
                return true;
            }
           return pawn.actions && pawn.actions[0].type!==UNABLE_TO_MOVE;
        }
        render(){
            return (
                <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                        <BoardContainer/>
                    </div>
                    <div className="col-sm-2">
                        <DiceContainer/>
                    </div>
                    <ToastContainer autoClose={10000} />
                </div>
            </div>
            )
        }
}
function mapStateToProps(state) {
    return {
        queue: state.queue,
        result: state.diceResult 
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pawnActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);