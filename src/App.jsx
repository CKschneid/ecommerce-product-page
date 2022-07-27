// import DesignSystem from "./components/DesignSystem";
import { useState } from "react";
import { useReducer } from "react";
import Nav from "./components/Nav";
import ProductPage from "./components/ProductPage";

const sampleCart = [
  {
    id: 123,
    name: "Fall Limited Edition Sneakers",
    unitPrice: 125,
    quantity: 3,
  },
];
const ACTIONS = {
  ADD_ITEM: "add-item",
  DELETE_ITEM: "delete-item",
};

const initialState = { cart: sampleCart };
const reducer = (state, action) => {
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
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      <Nav dispatch={dispatch} cart={state.cart} />
      <ProductPage dispatch={dispatch} />
    </>
  );
}

export default App;
