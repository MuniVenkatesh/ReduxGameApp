export const add=(data)=>{
  return{
    type:"ADD",
    payload:data
  }
}

export const titlefilter=(filters)=>{
  return{
    type:"FILTER_TITLE",
    payload:filters
  }
}

export const ecfilter=(filters)=>{
  return{
    type:"FILTER_EC",
    payload:filters
  }
}

export const fetchData=()=>{

  return function(dispatch){
    $.ajax({
      type:"get",
      url:"/fetch",
      success:(gamedata)=>{
        gamedata.map((data)=>{
          data.visibility=true;
          dispatch(add(data));
          return;
        })
        }
    })
  }
}
