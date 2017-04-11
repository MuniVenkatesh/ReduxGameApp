export const add=(data)=>{
  return{
    type:"ADD",
    payload:data
  }
}

export const filterData=(filters)=>{
  return{
    type:"FILTER",
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
