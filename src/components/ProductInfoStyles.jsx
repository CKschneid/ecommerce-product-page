import styled from "styled-components";
import {
  HeadingOne,
  HeadingTwo,
  PriceText,
  OriginalPriceText,
  BodyText,
} from "./Typography";

const StyledProductInfo = styled.div`
  max-width: 445px;
`;
const BrandName = styled(HeadingTwo)`
  margin-bottom: 27px;
`;
const ProductName = styled(HeadingOne)`
  margin-bottom: 32px;
`;
const ProductDescription = styled(BodyText)`
  margin-bottom: 24px;
`;
const PriceAndPercentOff = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 10px;
`;
const Price = styled(PriceText)``;
const PercentOff = styled.div`
  border-radius: 6px;
  padding: 7px 8px;
  background-color: ${({ theme }) => theme.colors.paleOrange};
`;
const OriginalPrice = styled(OriginalPriceText)`
  margin-bottom: 32px;
`;
const QuantityAndAdd = styled.div`
  display: flex;
`;
const Quantity = styled.div`
  width: 157px;
  height: 56px;
  margin-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
`;
const Minus = styled.img`
  cursor: pointer;
`;
const Plus = styled.img`
  cursor: pointer;
`;
const Add = styled.button`
  width: 272px;
  height: 56px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  cursor: pointer;
`;
const CartIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7443%)
    hue-rotate(40deg) brightness(94%) contrast(126%);
`;

export {
  StyledProductInfo,
  BrandName,
  ProductName,
  ProductDescription,
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
};
