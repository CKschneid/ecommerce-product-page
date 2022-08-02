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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
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
const Pricing = styled.div`
  display: block;
  margin-bottom: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
const OriginalPrice = styled(OriginalPriceText)``;
const QuantityAndAdd = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 0px;
    width: 100%;
  }
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
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
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
};
