import {
  StyledCart,
  Header,
  Divider,
  CartItems,
  CheckoutButton,
  ButtonText,
} from "./CartModalStyles";
import CartItem from "./CartItem";

const CartModal = ({ cart, dispatch, visible }) => {
  const deleteItem = () => {};

  return (
    <StyledCart visible={visible}>
      <Header>Cart</Header>
      <Divider />
      <CartItems>
        {cart.map((cartItem) => (
          <CartItem itemInfo={cartItem} dispatch={dispatch} />
        ))}
      </CartItems>
      <CheckoutButton>
        <ButtonText>Checkout</ButtonText>
      </CheckoutButton>
    </StyledCart>
  );
};

export default CartModal;

{
  /* <StyledCart>
  <Header/>
  <Divider/>
  <CartItems>
    <CartItem>
      <Thumnail/>
      <ProductName/>
      <ItemSummary>
        {UnitCost} x {NumberOfUnits}
        <TotalPrice/>
      </ItemSummary>
      <Delete/>
    </CartItem>
  </CartItems>
  <CheckoutButton/>
</StyledCart> */
}
