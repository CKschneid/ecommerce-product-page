import {
  StyledCartItem,
  Thumbnail,
  ItemSummary,
  TotalPrice,
  Delete,
} from "./CartItemStyles";
import thumbnailImg from "../assets/image-product-1-thumbnail.jpg";
import deleteSvg from "../assets/icon-delete.svg";
import { ACTIONS } from "../App";

const CartItem = ({ itemInfo, dispatch }) => {
  const calculateTotalPrice = (unitPrice, quantity) => {
    return (unitPrice * quantity).toFixed(2);
  };

  return (
    <StyledCartItem>
      <Thumbnail src={thumbnailImg} />
      <ItemSummary>
        {itemInfo.name} <br />${itemInfo.unitPrice} x {itemInfo.quantity}{" "}
        <TotalPrice>
          ${calculateTotalPrice(itemInfo.unitPrice, itemInfo.quantity)}
        </TotalPrice>
      </ItemSummary>
      <Delete
        src={deleteSvg}
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_ITEM, payload: itemInfo.id })
        }
      />
    </StyledCartItem>
  );
};

export default CartItem;

{
  /* <CartItem>
      <Thumnail/>
      <ProductName/>
      <ItemSummary>
        {UnitCost} x {NumberOfUnits}
        <TotalPrice/>
      </ItemSummary>
      <Delete/>
    </CartItem> */
}
