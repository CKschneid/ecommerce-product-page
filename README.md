# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Reflections](#reflections)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshots

![Desktop Preview](public/desktop-preview.jpg)
![Lightbox](public/active-states-lightbox.jpg)
![Mobile](public/mobile-design-basket-filled.jpg)

### Links

- [CodeSandbox.io Link](https://codesandbox.io/s/ecommerce-product-page-jvevtg?file=/package.json)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - styling solution with theming
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer) - state management
- [Figma](https://www.figma.com/) - provided design files

### Reflections

My process for building out atomic level elements felt much smoother as I used a parent ` <DesignSystem />` route to separate concerns and focus on the more granular details outside of the normal app flow.

For managing the state of the cart, I used the `useReducer` hook when I was reaching for multiple `useState` calls to manage the state of the cart.

```js
const sampleCart = [
  {
    id: 123,
    name: "Fall Limited Edition Sneakers",
    unitPrice: 125,
    quantity: 3,
  },
];
export const ACTIONS = {
  ADD_ITEM: "add-item",
  DELETE_ITEM: "delete-item",
};

export const initialState = sampleCart;
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [...state, action.payload];
    case ACTIONS.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
```

I was able to build out my responsive navigation purely pure CSS (via styled-compnents). I felt efficient when writing this part of the code:

```js
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
```

### Continued development

I look forward to embracing the challenge of more complex state management issues in the future. I think it will be imnportant to conitue to find ways to seaparate concerns when it comes to state and presentation so as to optimally manage the cognitive loads of development. Using a dedicated route for design system sandboxing gives me a glimpse into the workflows offered by more robust design system authoring tools like Storybook.js which I look forward to digging into deeper.
