import * as types from "./types";

const INITIAL_STATE = [];

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return action.payload;
    default:
      return state;
  }
};

export default cart;
