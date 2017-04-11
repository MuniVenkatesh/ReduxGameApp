import {connect} from "react-redux";
import React from "react";
import {bindActionCreators} from "redux";
import {filterData} from "../Actions/index.js";

class Filters extends React.Component{
  render(){
    var platform=[],genre=[];
    this.props.data.map(game=>{
      if(platform.indexOf(game.platform)==-1){
        platform.push(game.platform);
      }
      if(game.genre.indexOf(',')==-1){
        if(genre.indexOf(game.genre)==-1&&game.genre!=""){
          genre.push(game.genre);
        }
      }
      else{
      let list=game.genre.split(',');
      list.map(data=>{
        if(genre.indexOf(data.trim())==-1){
          genre.push(data.trim());
        }
      })
      }
    })

    return(
      <div className="row">
        <div className="col-lg-4">
          {platform.map(filter=>(<button className="btn btn-primary">{filter}</button>))}
        </div>
        <div className="col-lg-4">
          {genre.map(filter=>(<button className="btn btn-primary">{filter}</button>))}
        </div>
        <div className="col-lg-4">
          <button className="btn" style={(this.props.filter.editors_choice)?{backgroundColor:"blue"}:{backgroundColor:"grey"}} onClick={()=>{this.props.filter.editors_choice=!this.props.filter.editors_choice;this.props.filters(this.props.filter)}}>Editors_choice</button>
        </div>
      </div>);
  }
}

function mapStateToProps(state){
  return{
    data:state.data,
    filter:state.filters
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({filters:filterData},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Filters);
