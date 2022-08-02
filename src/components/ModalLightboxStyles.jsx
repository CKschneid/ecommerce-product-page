import styled from "styled-components";
import { ThumbnailRow as Row } from "./LightboxStyles";
import Thumbnail from "./Thumbnail";

const StyledModalLightbox = styled.div`
  display: ${({ modalLightboxIsVisible }) =>
    modalLightboxIsVisible ? "block" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.75);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const ContentContainer = styled.div`
  width: 550px;
  padding-top: 90px;
  margin: 0px auto;
`;
const CloseIcon = styled.img`
  float: right;
  cursor: pointer;
`;
const FeaturedContainer = styled.div`
  position: relative;
  margin: 24px 0px 40px;
`;
const FeaturedPhoto = styled.img``;
const Previous = styled.div`
  position: absolute;
  left: -28px;
  top: 237px;
  width: 56px;
  height: 56px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
const PreviousIcon = styled.img``;
const Next = styled.div`
  position: absolute;
  right: -28px;
  top: 237px;
  width: 56px;
  height: 56px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
const NextIcon = styled.img``;
const ThumbnailRow = styled(Row)`
  justify-content: space-evenly;
`;

export {
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
};
