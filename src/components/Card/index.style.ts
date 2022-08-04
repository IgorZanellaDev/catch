import styled from "styled-components";
import { getCatImage } from "utils/image";

const CARD_WIDTH = 400;

const StyledCard = styled.div<{ $catId: string }>`
  width: ${CARD_WIDTH}px;
  height: 600px;
  display: flex;
  align-items: end;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.white};
  background-image: url(${(props) => getCatImage(props.$catId, CARD_WIDTH)});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8) 50%
  );
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.white};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  gap: 32px;
`;

export { StyledCard, Footer, DataContainer, Name, ButtonsContainer };
