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
          {platform.map(filter=>(<button value={filter} className="btn" onClick={(e)=>{var index=this.props.filter.platform.indexOf(e.target.value); if(index!=-1){this.props.filter.platform.splice(index,1);e.target.style.backgroundColor="grey"} else{this.props.filter.platform.push(filter);e.target.style.backgroundColor="blue"}}}>{filter}</button>))}
        </div>
        <div className="col-lg-4">
          {genre.map(filter=>(<button value={filter} className="btn" onClick={(e)=>{var index=this.props.filter.genre.indexOf(e.target.value); if(index!=-1){this.props.filter.genre.splice(index,1);e.target.style.backgroundColor="grey"} else{this.props.filter.genre.push(filter);e.target.style.backgroundColor="blue"}}}>{filter}</button>))}
        </div>
        <div className="col-lg-4">
          <button className="btn" onClick={(e)=>{this.props.filter.editors_choice=!this.props.filter.editors_choice; var setColor=()=>((this.props.filter.editors_choice)?"blue":"grey"); e.target.style.backgroundColor=setColor();}}>Editors_choice</button>
        </div>
        <button className="btn btn-info" onClick={()=>{this.props.filters(this.props.filter)}}>Apply</button>
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
