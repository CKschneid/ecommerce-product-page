import styled from "styled-components";
import { useState } from "react";

const StyledProductPage = styled.div``;
const Lightbox = styled.div``;

const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);
  return <>some text</>;
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
