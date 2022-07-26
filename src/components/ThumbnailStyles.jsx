import styled from "styled-components";

const ThumbnailContainer = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  position: relative;
`;
const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
const ThumbnailOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ featured }) => (featured ? "0.75" : "0")};
  border: ${({ featured, theme }) =>
    featured ? `2px solid ${theme.colors.orange}` : "0"};

  &:hover {
    opacity: 0.5;
  }
`;

export { ThumbnailContainer, ThumbnailImage, ThumbnailOverlay };
