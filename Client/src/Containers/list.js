import {connect} from "react-redux";
import React from "react";
import {fetchData} from "../Actions/index.js";
import {bindActionCreators} from "redux";

class List extends React.Component{
  componentWillMount(){
    this.props.fetch();
  }
  render(){
    return(
      <div>
        {this.props.data.map((game)=>(<li>{game.title}{game.score}</li>))}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data:state.data
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetch:fetchData},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(List);
