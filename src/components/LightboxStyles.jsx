import styled from "styled-components";

const StyledLightbox = styled.div`
  max-width: 445px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
  }
`;
const FeaturedPhotoContainer = styled.div`
  width: 445px;
  height: 445px;
  border-radius: 15px;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0px;
  }
`;
const FeaturedPhoto = styled.img``;

const Previous = styled.div`
  position: absolute;
  left: 16px;
  top: 130px;
  width: 40px;
  height: 40px;
  background: white;

  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;
const PreviousIcon = styled.img``;
const Next = styled.div`
  position: absolute;
  right: 16px;
  top: 130px;
  width: 40px;
  height: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;
const NextIcon = styled.img``;

const ThumbnailRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export {
  StyledLightbox,
  FeaturedPhotoContainer,
  FeaturedPhoto,
  Previous,
  PreviousIcon,
  Next,
  NextIcon,
  ThumbnailRow,
};
