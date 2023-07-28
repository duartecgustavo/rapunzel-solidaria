import { ReactComponent as IconLogoRapunzelSolidaria } from "@/assets/logo-rapunzel-solidaria.svg";
import { ReactComponent as IconMenu } from "@/assets/icon-menu.svg";
import { colors } from "@/styles/colors";
import styled from "styled-components";

export const NavbarSC = styled.div`
  width: 100%;
  height: 120px;

  position: fixed;

  &.scroll-active {
    background-color: ${colors.seven_color_violet_dark_6E36B3};
    transition: background-color 0.2s;
    z-index: 2;
  }

  @media (max-width: 768px) {
    position: relative;
    background-color: ${colors.four_color_yellow_E1FF26};
    .desktop {
      display: none !important;
    }
    .mobile {
      display: flex !important;
    }
  }
  .desktop {
    display: flex;
  }
  .mobile {
    display: none;
  }
`;

export const IconLogoSC = styled(IconLogoRapunzelSolidaria)`
  width: 180px;

  // position: absolute;
  // z-index: 1;
  // left: 50%;
  // top: 20%;
  // transform: translate(-50%);
  &:hover {
    cursor: pointer;
  }
`;
export const IconMenuSC = styled(IconMenu)`
  &:hover {
    cursor: pointer;
  }
`;

export const TextSC = styled.p`
  font-weight: 700;
  color: ${colors.secondary_color_green_37B0CB};
`;

export const ButtonSC = styled.button<{ outlined?: boolean }>`
  height: 35px;
  color: ${(props) =>
    props.outlined
      ? colors.secondary_color_green_37B0CB
      : colors.primary_color_violet_A73AA7};
  border-width: ${(props) => props.outlined && "0px"};
  font-weight: 700;
  border-radius: 17.5px;
  padding: 0px 10px 0px 10px;
  background-color: ${(props) =>
    props.outlined ? "transparent" : colors.secondary_color_green_37B0CB};
`;
