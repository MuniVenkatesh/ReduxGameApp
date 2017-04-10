import {connect} from "react-redux";
import React from "react";
import {bindActionCreators} from "redux";
import {ecfilter} from "../Actions/index.js";

class Filters extends React.Component{
  render(){
    let platform=[],genre=[];
    this.props.data.map(game=>{
      if(platform.indexOf(game.platform)==-1){
        platform.push(game.platform);
      }
      if(genre.indexOf(game.genre)==-1){
        genre.push(game.genre);
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
          <button className="btn btn-primary" onClick={()=>{this.props.filters({ec:"Y"})}}>Editors_choice</button>
        </div>
      </div>);
  }
}

function mapStateToProps(state){
  return{
    data:state.data
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({filters:ecfilter},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Filters);
