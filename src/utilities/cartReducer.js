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
      return [...state, action.payload];
    case ACTIONS.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
