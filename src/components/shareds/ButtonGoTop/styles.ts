import styled from "styled-components";
import { ReactComponent as ArrowTop } from "@/assets/icon-arrow-top.svg";
import { colors } from "@/styles/colors";

export const ButtonGoTopSC = styled.a`
  width: 50px;
  height: 50px;

  display: none;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: ${colors.white_transparent_10};

  &.scroll-active {
    display: flex;
    position: fixed;
    top: 90%;
    left: 40px;
    z-index: 2;
  }
`;

export const GoToTopSvgSC = styled(ArrowTop)`
  width: 40px;
  stroke: ${colors.black_transparent_50};
  transition: stroke 0.3s ease;

  @media (max-width: 768px) {
    width: 30px;
  }
  &:hover {
    stroke: ${colors.secondary_color_green_37B0CB};
  }
`;
