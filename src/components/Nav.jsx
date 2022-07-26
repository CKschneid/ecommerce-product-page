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
  CartandUser,
  Cart,
  Avatar,
  Toggle,
  Divider,
  Overlay,
  MobileNav,
} from "./NavStyles";
import { Link } from "./Typography";
import { useState } from "react";

const linkList = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = () => {
  const [navIsVisible, setNavVisibility] = useState(false);
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
        <Logo src={logoSvg} />
        <Links>
          {linkList.map((link) => (
            <Link key={link}>{link}</Link>
          ))}
        </Links>
        <CartandUser>
          <Cart src={cartSvg} />
          <Avatar src={avatarImg} />
        </CartandUser>
      </StyledNav>
      <Overlay isVisible={navIsVisible}>
        <MobileNav>
          {linkList.map((link) => (
            <Link key={link}>{link}</Link>
          ))}
        </MobileNav>
      </Overlay>
    </>
  );
};

export default Nav;
