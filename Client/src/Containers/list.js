import {connect} from "react-redux";
import React from "react";
import {fetchData} from "../Actions/index.js";
import {titlefilter} from "../Actions/index.js";
import {bindActionCreators} from "redux";
import Filters from "./filters.js";

class List extends React.Component{
  componentWillMount(){
    this.props.fetch();
  }
  render(){
    return(
      <div className="container">
      <br/>
      <div className="row">
        <input type="text" placeholder="Search Game Here..." className="form-control" onChange={(e)=>{this.props.filters({title:e.target.value})}}/>
        <Filters />
      </div>
        {this.props.data.map((game)=>(
          <div className="col-sm-4" style={(game.visibility==true)?{display:"block"}:{display:"none"}}>
          <img className="img-rounded" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTPJDbZelqOYoDaoEXxthgU4TuNOlBfbKFIfrd78SPhDXqJvsu"/>
          <br/><h6>{game.title}</h6></div>))}
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
  return bindActionCreators({fetch:fetchData,filters:titlefilter},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(List);
