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

class Game extends Component{
        componentDidMount() {
          Notification.notifyInfo(Message.gameBegin(Queue.first(this.props.queue)));
        }
        componentDidUpdate(prevProps){
            const {queue, actions, result}=this.props;
            const player=Queue.first(queue)
            const prevPlayer= Queue.first(prevProps.queue)
           if(player.id !== prevPlayer.id){
               return;
           }
            if(player.pawns.filter(this.unableToMoveFilter).length){
                return;
            }
            Notification.notifyInfo(Message.unableToMove({player, result}));
            const queueNew = Queue.add({queue:Queue.remove(queue), player}); 
            actions.nextPlayer(queueNew);
            Notification.notifyInfo(Message.nextPlayer(Queue.first(queueNew)));
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