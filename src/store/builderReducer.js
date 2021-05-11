const initialState = {};

const builderReducer = (state = initialState, action) => {
  return state;
}

export default builderReducer; 
// const initialState = {
//     red: 1,
//     blue: 1,
//     black: 1,
//     pink: 1,
//     brown: 1,
//     violet: 1
// }
// const builderReducer  = (state = initialState, action) =>{
   
//     const newState = { ...state };
  
//     switch (action.type) {
//       case "ADD_INGREDIENT":
//         newState.ingredients[action.ingredient]++;
//         break;
//       case "REMOVE_INGREDIENT":
//         newState.ingredients[action.ingredient]--;
//         break;
  
//       default:
//         break;
//     }
  
//     return newState;
  
// }
// export default builderReducer