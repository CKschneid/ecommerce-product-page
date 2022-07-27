import styled from "styled-components";
import { useState } from "react";
import productImagesArray from "../utilities/productImageImports";
import { StyledLightbox, FeaturedPhoto, ThumbnailRow } from "./LightboxStyles";
import Thumbnail from "./Thumbnail";

const Lightbox = () => {
  const [featured, setFeatured] = useState({
    key: 1,
    src: productImagesArray[0].full,
  });

  const handleClick = (clickedPhotoIndex) => {
    const newFeaturedKey = clickedPhotoIndex;
    const newFeaturedImageObject = productImagesArray.find(
      (image) => image.key == clickedPhotoIndex
    );
    const newFeaturedImageSrc = newFeaturedImageObject.full;
    setFeatured({
      key: newFeaturedKey,
      src: newFeaturedImageSrc,
    });
  };

  return (
    <StyledLightbox>
      <FeaturedPhoto src={featured.src} />
      <ThumbnailRow>
        {productImagesArray.map((image) => (
          <Thumbnail
            key={image.key}
            image={image}
            featured={featured.key == image.key ? true : false}
            handleClick={handleClick}
          />
        ))}
      </ThumbnailRow>
    </StyledLightbox>
  );
};

export default Lightbox;
