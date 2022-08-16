import {
  StyledCart,
  Container,
  Card,
  Header,
  Divider,
  EmptyCart,
  CartItems,
  CheckoutButton,
  ButtonText,
} from "./CartModalStyles";
import CartItem from "./CartItem";

const CartModal = ({ cart, dispatch, visible }) => {
  return (
    <StyledCart visible={visible}>
      <Container>
        <Card>
          <Header>Cart</Header>
          <Divider />
          {cart.length == 0 ? (
            <EmptyCart>Your cart is empty.</EmptyCart>
          ) : (
            <>
              <CartItems>
                {cart.map((cartItem) => (
                  <CartItem itemInfo={cartItem} dispatch={dispatch} />
                ))}
              </CartItems>
              <CheckoutButton>
                <ButtonText>Checkout</ButtonText>
              </CheckoutButton>
            </>
          )}
        </Card>
      </Container>
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
