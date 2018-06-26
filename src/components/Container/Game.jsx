import React, {Component} from "react";
import BoardContainer from "./Board.container";
import DiceContainer from "./DiceContainer";
import { ToastContainer } from "react-toastify";
import {connect} from "react-redux";
import Notification from "../../core/Notifications";
import Messages from '../../core/Messages';
class Game extends Component{
        componentDidMount() {
          Notification.notifyInfo(Messages.gameBegin(this.props));
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
    }
}


export default connect(mapStateToProps)(Game);