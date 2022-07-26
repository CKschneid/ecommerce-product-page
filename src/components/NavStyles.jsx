import styled from "styled-components";
const StyledNav = styled.div`
  max-width: 1100px;
  margin: 28px auto 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 137.5px;
  height: 20px;
  margin-right: 5vw;
  padding-left: 3vw;
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
const CartandUser = styled.div`
  display: flex;
  align-items: center;
`;
const Cart = styled.img`
  width: 21.82px;
  height: 20px;
  margin: 0px 4vw;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

const Toggle = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;
const Divider = styled.hr``;

const Overlay = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 100%, 0%, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
`;
const MobileNav = styled.ul`
  background-color: white;
  width: 250px;
  height: 100%;
`;

export {
  StyledNav,
  Logo,
  Links,
  CartandUser,
  Cart,
  Avatar,
  Toggle,
  Divider,
  Overlay,
  MobileNav,
};
