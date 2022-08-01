import { useState } from "react";
import productImagesArray from "../utilities/productImageImports";
import {
  StyledModalLightbox,
  ContentContainer,
  CloseIcon,
  FeaturedContainer,
  FeaturedPhoto,
  Previous,
  PreviousIcon,
  Next,
  NextIcon,
  ThumbnailRow,
  Thumbnail,
} from "./ModalLightboxStyles";

import closeSvg from "../assets/icon-close.svg";
import previousSvg from "../assets/icon-previous.svg";
import nextSvg from "../assets/icon-next.svg";

const ModalLightbox = ({
  modalLightboxIsVisible,
  setModalLightboxVisibility,
}) => {
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

  const handleNext = () => {
    const newKey = featured.key + 1;
    if (newKey <= productImagesArray.length) {
      const newSrc = productImagesArray[newKey - 1].full;
      setFeatured({
        key: newKey,
        src: newSrc,
      });
    }
  };
  const handlePrevious = () => {
    const newKey = featured.key - 1;
    if (newKey >= 1) {
      const newSrc = productImagesArray[newKey - 1].full;
      setFeatured({
        key: newKey,
        src: newSrc,
      });
    }
  };

  return (
    <StyledModalLightbox modalLightboxIsVisible={modalLightboxIsVisible}>
      <ContentContainer>
        <CloseIcon
          src={closeSvg}
          onClick={() => setModalLightboxVisibility(false)}
        />
        <FeaturedContainer>
          <FeaturedPhoto src={featured.src} />
          <Previous onClick={handlePrevious}>
            <PreviousIcon src={previousSvg} />
          </Previous>
          <Next onClick={handleNext}>
            <NextIcon src={nextSvg} />
          </Next>
        </FeaturedContainer>
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
      </ContentContainer>
    </StyledModalLightbox>
  );
};

export default ModalLightbox;

/* <StyledModalLightbox>
  <CloseIcon/>
  <FeaturedContainer>
    <FeaturedPhoto/>
    <Back>
      <BackIcon/>
    </Back>
    <Next>
      <NextIcon />
    </Next>
  </FeaturedContainer>
  <Thumbnails>
    <Thumbnail/>
  </Thumbnails>
</StyledModalLightbox> */
