import { ReactComponent as IconLogoRapunzelSolidaria } from "@/assets/logo-rapunzel-solidaria.svg";
import { ReactComponent as IconMenu } from "@/assets/icon-menu.svg";
import { colors } from "@/styles/colors";
import styled from "styled-components";

export const NavbarSC = styled.div`
  width: 100%;
  height: 90px;

  position: fixed;

  &.scroll-active {
    background-color: ${colors.seven_color_violet_dark_6E36B3};
    transition: background-color 0.2s;
    z-index: 2;
  }

  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    background-color: ${colors.five_color_violet_pink_BC6BFA};

    .desktop {
      display: none !important;
    }

    .mobile {
      display: flex !important;
    }
  }
`;

export const IconLogoSC = styled(IconLogoRapunzelSolidaria)`
  width: 180px;
  height: 70px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100px !important;
  }
`;
export const IconMenuSC = styled(IconMenu)`
  fill: ${colors.secondary_color_green_37B0CB};
  @media (max-width: 768px) {
    fill: ${colors.white_FFFFFF};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const TextSC = styled.p`
  font-weight: 700;
  color: ${colors.secondary_color_green_37B0CB};
  @media (max-width: 768px) {
    color: ${colors.white_FFFFFF};
  }
`;

export const ButtonSC = styled.button<{ isoutlined?: any }>`
  width: fit-content;
  font-size: 22px;
  user-select: none;
  color: ${(props) =>
    props.isoutlined
      ? colors.secondary_color_green_37B0CB
      : colors.primary_color_violet_A73AA7};
  border-width: ${(props) => props.isoutlined && "0px"};
  font-weight: 700;
  border-radius: 30px;
  border: 2px solid transparent;
  padding: 0px 14px 0px 14px;
  background-color: ${(props) =>
    props.isoutlined ? "transparent" : colors.secondary_color_green_37B0CB};

  &.scroll-active {
    color: ${colors.seven_color_violet_dark_6E36B3};
  }

  @media (max-width: 768px) {
    width: 100% !important;
  }

  &:hover {
    background-color: ${(props) =>
      props.isoutlined
        ? "transparent"
        : colors.secondary_color_green_light_6FBECF};
    color: ${(props) =>
      props.isoutlined
        ? colors.secondary_color_green_light_6FBECF
        : colors.primary_color_violet_A73AA7};
    border: ${(props) => props.isoutlined && "3px solid #6FBECF"};
  }
`;

export const UlSC = styled.ul`
  background: white;
  list-style-type: none;

  width: max-content;
  position: absolute;
  top: 35px;
  right: 0%;
  z-index: 2;
  padding: 0px;

  border-radius: 8px;
`;
export const LiSC = styled.ul`
  padding: 14px 22px 14px 22px;

  & > a:hover {
    cursor: pointer;
  }
`;
