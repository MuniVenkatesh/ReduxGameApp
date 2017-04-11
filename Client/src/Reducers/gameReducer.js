export const gameData=(state=[],action)=>{
  switch (action.type) {
    case "ADD":return [
      ...state,
      action.payload
    ]
      break;

    case "FILTER":
        let list=state.map(data=>{
          if(data.title.toUpperCase().indexOf(action.payload.title.toUpperCase())==-1){
            data.visibility=false;
          }
          else if(action.payload.editors_choice==true&&data.editors_choice!="Y"){
            data.visibility=false;
          }
          else {
            data.visibility=true;
          }
          return data;
        });
        return list;
        break;
  }
  return state;
}


export const filter=(state={title:"",platform:[],genre:[],editors_choice:false,score:0},action)=>{
if(action.type=="FILTER"){
  return action.payload;
}
return state;
}
