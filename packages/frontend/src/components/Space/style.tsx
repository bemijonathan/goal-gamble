import styled from "styled-components";

export interface StyledSpacerProps {
  minHeight: string;
}

export const Spacer = styled.div<StyledSpacerProps>`
  min-height: ${(props: StyledSpacerProps) => props.minHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;
