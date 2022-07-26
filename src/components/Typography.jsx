import styled from "styled-components";

const HeadingOne = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.veryDarkBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const HeadingTwo = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.84615px;
  }
`;

const PriceText = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.veryDarkBlue};
`;

const PercentOffText = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;

const OriginalPriceText = styled.h5`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-decoration-line: line-through;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

const BodyText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;

const QuantityText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.veryDarkBlue};
`;

const ButtonText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.orange};
`;

const ModalHeader = styled.h5`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const Link = styled.li`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;
export {
  HeadingOne,
  HeadingTwo,
  PriceText,
  PercentOffText,
  OriginalPriceText,
  BodyText,
  QuantityText,
  ButtonText,
  ModalHeader,
  Link,
};
