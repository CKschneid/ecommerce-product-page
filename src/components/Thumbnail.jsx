import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailOverlay,
} from "./ThumbnailStyles";

const Thumbnail = ({ image, handleClick, featured }) => {
  return (
    <ThumbnailContainer onClick={() => handleClick(image.key)}>
      <ThumbnailImage src={image.thumb} />
      <ThumbnailOverlay featured={featured} />
    </ThumbnailContainer>
  );
};

export default Thumbnail;
