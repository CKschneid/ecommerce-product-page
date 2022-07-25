import {
  HeadingOne,
  HeadingTwo,
  PriceText,
  PercentOffText,
  OriginalPriceText,
  BodyText,
  QuantityText,
  ButtonText,
  ModalHeader,
} from "./Typography";

const DesignSystem = () => {
  return (
    <>
      <HeadingOne>Fall Limited Edition Sneakers</HeadingOne>
      <HeadingTwo>sneaker company</HeadingTwo>
      <PriceText>$125.00</PriceText>
      <PercentOffText>50%</PercentOffText>
      <BodyText>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </BodyText>
      <OriginalPriceText>$250.00</OriginalPriceText>
      <QuantityText>0</QuantityText>
      <ButtonText>Add to Cart</ButtonText>
      <ModalHeader>Cart</ModalHeader>
    </>
  );
};

export default DesignSystem;
