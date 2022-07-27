import styled from "styled-components";
import { BodyText, CartHeaderText, ButtonText } from "./Typography";

const StyledCart = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  top: 70px;
  right: 70px;
  width: 360px;
  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  border-radius: 10px;
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

const CheckoutButton = styled.button`
  width: 312px;
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

export { StyledCart, Header, Divider, CartItems, CheckoutButton, ButtonText };
