import styled from "styled-components";
import { useState } from "react";
import productImagesArray from "../utilities/productImageImports";
import {
  StyledLightbox,
  FeaturedPhotoContainer,
  FeaturedPhoto,
  Previous,
  PreviousIcon,
  Next,
  NextIcon,
  ThumbnailRow,
} from "./LightboxStyles";
import Thumbnail from "./Thumbnail";
import previousSvg from "../assets/icon-previous.svg";
import nextSvg from "../assets/icon-next.svg";

const Lightbox = ({ setModalLightboxVisibility }) => {
  const [featured, setFeatured] = useState({
    key: 1,
    src: productImagesArray[0].full,
  });

  const handleFeaturedClick = () => {
    setModalLightboxVisibility(true);
  };

  const handleThumbnailClick = (clickedPhotoIndex) => {
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
  const handleNext = (e) => {
    const newKey = featured.key + 1;
    if (newKey <= productImagesArray.length) {
      const newSrc = productImagesArray[newKey - 1].full;
      setFeatured({
        key: newKey,
        src: newSrc,
      });
    }
    e.stopPropagation();
  };
  const handlePrevious = (e) => {
    const newKey = featured.key - 1;
    if (newKey >= 1) {
      const newSrc = productImagesArray[newKey - 1].full;
      setFeatured({
        key: newKey,
        src: newSrc,
      });
    }
    e.stopPropagation();
  };
  return (
    <StyledLightbox>
      <FeaturedPhotoContainer onClick={handleFeaturedClick}>
        <FeaturedPhoto src={featured.src} />
        <Previous>
          <PreviousIcon src={previousSvg} onClick={handlePrevious} />
        </Previous>
        <Next>
          <NextIcon src={nextSvg} onClick={handleNext} />
        </Next>
      </FeaturedPhotoContainer>
      <ThumbnailRow>
        {productImagesArray.map((image) => (
          <Thumbnail
            key={image.key}
            image={image}
            featured={featured.key == image.key ? true : false}
            handleClick={handleThumbnailClick}
          />
        ))}
      </ThumbnailRow>
    </StyledLightbox>
  );
};

export default Lightbox;
