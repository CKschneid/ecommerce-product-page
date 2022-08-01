// import DesignSystem from "./components/DesignSystem";
import { useState } from "react";
import { useReducer } from "react";
import Nav from "./components/Nav";
import ProductPage from "./components/ProductPage";
import CartModal from "./components/CartModal";
import ModalLightbox from "./components/ModalLightbox";

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
  const [cartIsVisible, setCartVisibility] = useState(false);
  const [modalLightboxIsVisible, setModalLightboxVisibility] = useState(false);

  return (
    <>
      <Nav
        dispatch={dispatch}
        cart={state.cart}
        cartIsVisible={cartIsVisible}
        setCartVisibility={setCartVisibility}
      />
      <ProductPage
        dispatch={dispatch}
        modalLightboxIsVisible={modalLightboxIsVisible}
        setModalLightboxVisibility={setModalLightboxVisibility}
      />
      <CartModal
        visible={cartIsVisible}
        cart={state.cart}
        dispatch={dispatch}
      />
      <ModalLightbox
        modalLightboxIsVisible={modalLightboxIsVisible}
        setModalLightboxVisibility={setModalLightboxVisibility}
      />
    </>
  );
}

export default App;
