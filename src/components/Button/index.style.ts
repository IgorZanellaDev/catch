import styled from "styled-components";
import { VariantType } from "ui/theme/theme";
import { StyledIcon } from "components/Icon/index.style";

interface StyledButtonProps {
  variant: VariantType;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${(props) => props.theme.variants[props.variant].main};
  border-radius: 100%;
  transition: all 0.2s ease-in-out;

  ${StyledIcon} {
    color: ${(props) => props.theme.variants[props.variant].main};

    transition: all 0.3s ease-in-out;
  }

  :hover {
    background: ${(props) => props.theme.variants[props.variant].main};

    ${StyledIcon} {
      color: ${(props) => props.theme.variants[props.variant].contrast};
    }
  }
`;

export { StyledButton };
