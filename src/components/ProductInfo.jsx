import { useState } from "react";
import { PercentOffText, QuantityText, ButtonText } from "./Typography";
import {
  StyledProductInfo,
  BrandName,
  ProductName,
  ProductDescription,
  Pricing,
  PriceAndPercentOff,
  Price,
  PercentOff,
  OriginalPrice,
  QuantityAndAdd,
  Quantity,
  Minus,
  Plus,
  Add,
  CartIcon,
} from "./ProductInfoStyles";
import minusSvg from "../assets/icon-minus.svg";
import plusSvg from "../assets/icon-plus.svg";
import cartSvg from "../assets/icon-cart.svg";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const handleClick = (change) => {
    if (quantity == 0 && change == -1) {
      return;
    }
    const newQuantity = quantity + change;
    setQuantity(newQuantity);
  };
  return (
    <StyledProductInfo>
      <BrandName>sneaker company</BrandName>
      <ProductName>Fall Limited Edition Sneakers</ProductName>
      <ProductDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </ProductDescription>
      <Pricing>
        <PriceAndPercentOff>
          <Price>$125.00</Price>
          <PercentOff>
            <PercentOffText>50%</PercentOffText>
          </PercentOff>
        </PriceAndPercentOff>
        <OriginalPrice>$250.00</OriginalPrice>
      </Pricing>

      <QuantityAndAdd>
        <Quantity>
          <Minus src={minusSvg} onClick={() => handleClick(-1)} />
          <QuantityText>{quantity}</QuantityText>
          <Plus src={plusSvg} onClick={() => handleClick(1)} />
        </Quantity>
        <Add>
          <CartIcon src={cartSvg} />
          <ButtonText>Add to Cart</ButtonText>
        </Add>
      </QuantityAndAdd>
    </StyledProductInfo>
  );
};

export default ProductInfo;
