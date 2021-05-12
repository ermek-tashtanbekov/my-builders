import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../action/types";


const initialState = {
    ingredients: {
    },
    price: 0,
};
const prices = {
    red: 15,
    blue: 25,
    brown: 53,
    black: 32,
    pink: 25,
    violet: 47
};

const builder = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case ADD_INGREDIENT:
            newState.ingredients[action.ingredient]++;
            newState.price += prices[action.ingredient];
            break;
        case REMOVE_INGREDIENT:
            newState.ingredients[action.ingredient]--;
            newState.price -= prices[action.ingredient];
            break;
        case SET_INGREDIENTS:
            return { ...action.data };

        default:
            break;
    }

    return newState;
}

export default builder;





// import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../action/types";

// const initialState = {
//     ingredients: {
//     },
//     price: 0,
// };
// const prices = {
//     red: 15,
//     blue: 25,
//     brown: 53,
//     black: 32,
//     pink: 25,
//     violet: 47
// };

// const builder = (state = initialState, action) => {
//     const newState = { ...state };

//     switch (action.type) {
//         case ADD_INGREDIENT:
//             newState.ingredients[action.ingredient]++;
//             newState.price += prices[action.ingredient];
//             break;
//         case REMOVE_INGREDIENT:
//             newState.ingredients[action.ingredient]--;
//             newState.price -= prices[action.ingredient];
//             break;
//         case SET_INGREDIENTS:
//             newState.ingredients = action.data.ingredients;
//             newState.price = action.data.price;
//             break;

//         default:
//             break;
//     }

//     return newState;
// }

// export default builder;