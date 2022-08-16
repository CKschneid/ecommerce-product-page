import styled from "styled-components";
import { BodyText, CartHeaderText, ButtonText } from "./Typography";

const StyledCart = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: absolute;
  top: 70px;
  width: 100%;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 360px;
  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

const Header = styled(CartHeaderText)`
  padding: 24px;
`;
const Divider = styled.hr`
  border-top: 1px solid hsla(219, 35%, 92%, 1);
`;
const CartItems = styled.div`
  padding: 24px;
`;
const EmptyCart = styled(BodyText)`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #69707d;
  padding: 36px 0px;
`;
const CheckoutButton = styled.button`
  width: 90%;

  height: 56px;
  margin: 0px auto 32px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export {
  StyledCart,
  Container,
  Card,
  Header,
  Divider,
  EmptyCart,
  CartItems,
  CheckoutButton,
  ButtonText,
};
