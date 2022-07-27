import styled from "styled-components";
import { useState } from "react";
import Lightbox from "./Lightbox";
import ProductInfo from "./ProductInfo";

const StyledProductPage = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 90px auto 90px;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductPage = () => {
  return (
    <StyledProductPage>
      <Lightbox />
      <ProductInfo />
    </StyledProductPage>
  );
};

export default ProductPage;

/*
<StyledProductPage>
 <Lightbox>
  <FeaturedPhoto/>
  <ThumbnailRow>
    <Thumbnail/>
  </ThumbnailRow>
 </Lightbox>
 <ProductInfo>
  <HeaderTwo>Sneaker Company </HeaderTwo>
  <HeaderOne> Fall Limtited... </HeaderOne>
  <Body>These low... </Body>
  <PriceAndPercent/>
  <OriginalPrice/>
  <QuantityAndAdd>
    <Quantity/>
    <Add/>
 </ProductInfo>
</StyledProductPage>
*/
