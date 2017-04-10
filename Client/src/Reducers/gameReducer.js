export const gameData=(state=[],action)=>{
  switch (action.type) {
    case "ADD":return [
      ...state,
      action.payload
    ]
      break;

    case "FILTER_TITLE":
        let list=state.map(data=>{
          if(data.title.toUpperCase().indexOf(action.payload.title.toUpperCase())==-1){
            data.visibility=false;
          }
          else {
            data.visibility=true;
          }
          return data;
        });
        return list;
        break;

    case "FILTER_EC":
          return state.map(data=>{
              if(data.editors_choice!="Y"){
                data.visibility=false;
              }
              return data;
            });

            break;
  }
  return state;
}
