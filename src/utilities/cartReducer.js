const sampleCart = [
  {
    id: 123,
    name: "Fall Limited Edition Sneakers",
    unitPrice: 125,
    quantity: 3,
  },
];
export const ACTIONS = {
  ADD_ITEM: "add-item",
  DELETE_ITEM: "delete-item",
};

export const initialState = sampleCart;
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] };
    case ACTIONS.DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload.id),
      };
    default:
      return state;
  }
};
