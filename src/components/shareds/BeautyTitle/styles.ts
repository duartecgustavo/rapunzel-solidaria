import { colors } from "@/styles/colors";
import styled from "styled-components";

interface ContainerTitleProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const ContainerTitleSC = styled.div<ContainerTitleProps>`
  position: relative;
  text-align: center;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
`;

export const ContainerTitleMobileSC = styled.div<ContainerTitleProps>`
  position: relative;
  text-align: center;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25% !important;
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

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const FrontTitleMobileSC = styled.p`
  font-weight: bold;
  position: absolute;
  z-index: 1;
  font-size: 44px;
  color: ${(props) =>
    props.color == "Violet"
      ? colors.five_color_violet_pink_BC6BFA
      : colors.white_FFFFFF};
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

  @media (max-width: 768px) {
    font-size: 54px;
  }
`;
