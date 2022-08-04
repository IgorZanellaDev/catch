import styled from "styled-components";
import Card from "components/Card";

const StyledCardsContainer = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 600px;
`;

const CardsContainerCard = styled(Card)<{ index: number }>`
  position: absolute;
  top: ${(props) => (props.index >= 3 ? 0 : -props.index * 10)}px;
  z-index: ${(props) => -props.index};
`;

export { StyledCardsContainer, CardsContainerCard };
