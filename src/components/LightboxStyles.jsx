import styled from "styled-components";

const StyledLightbox = styled.div`
  max-width: 445px;
`;
const FeaturedPhoto = styled.img`
  width: 445px;
  height: 445px;
  border-radius: 15px;
  margin-bottom: 32px;
`;
const ThumbnailRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { StyledLightbox, FeaturedPhoto, ThumbnailRow };
