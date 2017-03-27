import {connect} from "react-redux";
import React from "react";

var data=[
  {
    "9": 9,
    "LittleBigPlanet PS Vita": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",
    "PlayStation Vita": "PlayStation Vita",
    "Platformer": "Platformer",
    "Y": "Y"
  },
  {
    "9": 8.5,
    "LittleBigPlanet PS Vita": "Splice: Tree of Life",
    "PlayStation Vita": "iPad",
    "Platformer": "Puzzle",
    "Y": "N"
  },
  {
    "9": 8.5,
    "LittleBigPlanet PS Vita": "NHL 13",
    "PlayStation Vita": "Xbox 360",
    "Platformer": "Sports",
    "Y": "N"
  }
]

class List extends React.Component{
  render(){
    return(
      <div>
        {this.props.data.map((game)=>(<li>{game.Y}{game.Platformer}</li>))}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data:data
  }
}

export default connect(mapStateToProps)(List);
