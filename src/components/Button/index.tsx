import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { StyledButton } from "./index.style";
import { VariantType } from "ui/theme/theme";
import Icon, { IconProps } from "components/Icon";

interface ButtonProps {
  icon?: IconProps;
  variant?: VariantType;
}

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<Props> = ({
  icon,
  variant = "like",
  ...rest
}) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {icon && <Icon size={40} {...icon} />}
    </StyledButton>
  );
};

export default Button;
