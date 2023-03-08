import React from "react";
import * as S from "./style";

export interface SpacerProps extends S.StyledSpacerProps {
  children: React.ReactNode;
}

export const Space = (props: SpacerProps) => {
  return <S.Spacer {...props}>{props.children}</S.Spacer>;
};
