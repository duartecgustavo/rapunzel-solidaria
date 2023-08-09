import { colors } from "@/styles/colors";
import styled from "styled-components";
import { ITextMarkProps } from "./TextMark";

export const TextMarkSC = styled.div<ITextMarkProps>`
  display: flex;
  align-items: center;

  height: 24px;
  padding: 0px 4px 0px 4px;
  margin: 0px 4px 0px 4px !important;
  border-radius: 2px;

  font-family: Architects Daughter !important;
  background-color: ${(props) => props.color || colors.white_transparent_30};
`;
