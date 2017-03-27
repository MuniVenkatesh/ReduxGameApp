export const gameData=(state=[],action)=>{
  switch (action.type) {
    case "ADD":return [
      ...state,
      action.payload
    ]
      break;

  }
  return state;
}
