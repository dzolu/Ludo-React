import React, { Component } from "react";
import {connect} from "react-redux";
import Board from '../Presentation/Board';
class BoardContainer extends Component{
    render(){
        return( <Board/>)
    }
     
}

function mapStateToProps(state) {
    return {
    }
}


export default connect(mapStateToProps)(BoardContainer);