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
  font-size: 36px;
  color: ${colors.white_FFFFFF};
  cursor: cell;
  user-select: none;
`;

export const BackTitleSC = styled.p`
  font-weight: bold;
  font-size: 70px;
  color: ${colors.white_transparent_10};
  cursor: cell;
  user-select: none;
`;
