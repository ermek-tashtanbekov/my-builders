import { SET_ORDERS } from "../action/types";

const initialState = [];

const orders = (state = initialState, action) => {

  switch (action.type) {
    case SET_ORDERS:
      return [ ...action.orders ];
  
    default:
      break;
  }

  return state;
}

export default orders;