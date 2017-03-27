export const add=(data)=>{
  return{
    type:"ADD",
    payload:data
  }
}

export const fetchData=()=>{

  return function(dispatch){
    $.ajax({
      type:"get",
      url:"/fetch",
      success:(gamedata)=>{
        gamedata.map((data)=>{
          dispatch(add(data));
          return;
        })
        }
    })
  }
}
