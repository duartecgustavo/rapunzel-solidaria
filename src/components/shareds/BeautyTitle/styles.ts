import { colors } from "@/styles/colors";
import styled from "styled-components";

export const ContainerTitleSC = styled.div`
  position: relative;
  text-align: center;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FrontTitleSC = styled.p`
  font-weight: bold;
  position: absolute;
  z-index: 1;
  font-size: 54px;
  color: ${(props) =>
    props.color == "Violet"
      ? colors.five_color_violet_pink_BC6BFA
      : colors.white_FFFFFF};
  cursor: cell;
  user-select: none;
`;

export const BackTitleSC = styled.p`
  font-weight: bold;
  font-size: 86px;
  color: ${(props) =>
    props.color == "Violet"
      ? colors.primary_transparent_color_violet_10
      : colors.white_transparent_10};
  cursor: cell;
  user-select: none;
`;
