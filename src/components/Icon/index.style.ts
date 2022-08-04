import styled from "styled-components";

const StyledIcon = styled.svg<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "currentColor"};
`;

export { StyledIcon };
