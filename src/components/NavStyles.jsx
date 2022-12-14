import styled, { css } from "styled-components";
import { LinkText, LiveCartText } from "./Typography";

const StyledNav = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
  }
`;
const Logo = styled.div`
  width: 137.5px;
  height: 20px;
  margin-right: 5vw;
  @media (max-width: 1100px) {
    margin-left: 3vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 10vw;
  }
`;
const Links = styled.ul`
  flex-grow: 1;
  display: flex;
  gap: 3vw;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const Link = styled(LinkText)`
  cursor: pointer;
  padding: ${({ mobile }) => (mobile ? "12px 0px 12px 20px" : "25px 0px")};
  border-bottom: 4px solid hsla(26, 100%, 55%, 0);
  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
  }

  ${({ mobile, theme }) =>
    mobile &&
    css`
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      color: ${theme.colors.veryDarkBlue};
    `}
`;
const CartandUser = styled.div`
  display: flex;
  align-items: center;
`;
const Cart = styled.div`
  width: 28px;
  height: 26px;
  margin: 0px 4vw;
  position: relative;
  cursor: pointer;
`;

const LiveCart = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  border-radius: 6.5px;
  padding: 3px 6px;
  background-color: ${({ theme }) => theme.colors.orange};
  display: ${({ totalQuantity }) => (totalQuantity > 0 ? "block" : "none")};
`;
const CartIcon = styled.img`
  width: 21.82px;
  height: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid hsla(26, 100%, 55%, 0);
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;

const Toggle = styled.img`
  display: none;
  position: absolute;
  z-index: 3;
  top: 19px;
  left: 16px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;
const Divider = styled.hr`
  border-top: 1px solid hsla(219, 35%, 92%, 1);
  max-width: 1100px;
  margin: 0px auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 100%, 0%, 0.5);
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
`;
const MobileNav = styled.ul`
  background-color: white;
  width: 250px;
  height: 100%;
  padding-top: 90px;
`;

export {
  StyledNav,
  Logo,
  Links,
  Link,
  CartandUser,
  Cart,
  CartIcon,
  LiveCart,
  Avatar,
  Toggle,
  Divider,
  Overlay,
  MobileNav,
  LiveCartText,
};
