import styled from "styled-components";
import { BodyText } from "./Typography";
const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Thumbnail = styled.img`
  border-radius: 4px;
  width: 50px;
  height: 50px;
`;
const ItemSummary = styled(BodyText)`
  color: hsla(220, 9%, 45%, 1);
`;
const TotalPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.veryDarkBlue};
`;
const Delete = styled.img`
  width: 14px;
  height: 16px;
  cursor: pointer;
`;

export { StyledCartItem, Thumbnail, ItemSummary, TotalPrice, Delete };
