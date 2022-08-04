import { FunctionComponent, HTMLAttributes } from "react";
import {
  ButtonsContainer,
  DataContainer,
  Footer,
  Name,
  StyledCard,
} from "./index.style";
import { Cat } from "app-types/cat";
import Button from "components/Button";
import { Action } from "app-types/action";

interface CardProps {
  cat: Cat;
  onAction: (action: Action) => void;
}

type Props = CardProps & HTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ cat, onAction, ...rest }) => {
  return (
    <StyledCard $catId={cat.id} {...rest}>
      <Footer>
        <DataContainer>
          <Name>
            {cat.name}, {cat.age}
          </Name>
        </DataContainer>
        <ButtonsContainer>
          <Button
            icon={{ type: "x" }}
            variant={"ignore"}
            onClick={() => onAction(Action.Ignore)}
          />
          <Button
            icon={{ type: "star" }}
            variant={"superLike"}
            onClick={() => onAction(Action.SuperLike)}
          />
          <Button
            icon={{ type: "heart" }}
            variant={"like"}
            onClick={() => onAction(Action.Like)}
          />
        </ButtonsContainer>
      </Footer>
    </StyledCard>
  );
};

export default Card;
