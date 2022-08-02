// import DesignSystem from "./components/DesignSystem";
import { useState } from "react";
import { useReducer } from "react";
import Nav from "./components/Nav";
import ProductPage from "./components/ProductPage";
import CartModal from "./components/CartModal";
import ModalLightbox from "./components/ModalLightbox";
import { cartReducer, initialState } from "./utilities/cartReducer";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [cartIsVisible, setCartVisibility] = useState(false);
  const [modalLightboxIsVisible, setModalLightboxVisibility] = useState(false);

  return (
    <>
      <Nav
        dispatch={dispatch}
        cart={cart}
        cartIsVisible={cartIsVisible}
        setCartVisibility={setCartVisibility}
      />
      <ProductPage
        dispatch={dispatch}
        modalLightboxIsVisible={modalLightboxIsVisible}
        setModalLightboxVisibility={setModalLightboxVisibility}
      />
      <CartModal visible={cartIsVisible} cart={cart} dispatch={dispatch} />
      <ModalLightbox
        modalLightboxIsVisible={modalLightboxIsVisible}
        setModalLightboxVisibility={setModalLightboxVisibility}
      />
    </>
  );
}

export default App;
