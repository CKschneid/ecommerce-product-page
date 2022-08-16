// image imports
import logoSvg from "../assets/logo.svg";
import cartSvg from "../assets/icon-cart.svg";
import avatarImg from "../assets/image-avatar.png";
import hamburgerSvg from "../assets/icon-menu.svg";
import closeSvg from "../assets/icon-close.svg";
// styled component imports
import {
  StyledNav,
  Logo,
  Links,
  Link,
  CartandUser,
  Cart,
  CartIcon,
  LiveCart,
  LiveCartText,
  Avatar,
  Toggle,
  Divider,
  Overlay,
  MobileNav,
} from "./NavStyles";
import { useState } from "react";

const linkList = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = ({ cart, dispatch, cartIsVisible, setCartVisibility }) => {
  const [navIsVisible, setNavVisibility] = useState(false);
  const totalQuantity = cart.reduce((prevValue, currentValue) => {
    return (prevValue.quantity || 0) + currentValue.quantity;
  }, 0);

  const handleClick = () => {
    setNavVisibility(!navIsVisible);
  };
  return (
    <>
      <Toggle
        src={navIsVisible ? closeSvg : hamburgerSvg}
        onClick={handleClick}
      />
      <StyledNav>
        <Logo>
          <img src={logoSvg} />
        </Logo>
        <Links>
          {linkList.map((link) => (
            <Link key={link}>{link}</Link>
          ))}
        </Links>
        <CartandUser>
          <Cart onClick={() => setCartVisibility(!cartIsVisible)}>
            <CartIcon src={cartSvg} />
            <LiveCart totalQuantity={totalQuantity}>
              <LiveCartText>{totalQuantity}</LiveCartText>
            </LiveCart>
          </Cart>
          <Avatar src={avatarImg} />
        </CartandUser>
      </StyledNav>
      <Overlay isVisible={navIsVisible}>
        <MobileNav>
          {linkList.map((link) => (
            <Link mobile key={link}>
              {link}
            </Link>
          ))}
        </MobileNav>
      </Overlay>
      <Divider />
    </>
  );
};

export default Nav;
