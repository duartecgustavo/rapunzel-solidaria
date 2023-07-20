// eslint-disable-next-line no-unused-vars
import styled from "styled-components";
import { ReactComponent as IconLogoRapunzelSolidaria } from "@/assets/logo-rapunzel-solidaria.svg";
import { ReactComponent as IconMenu } from "@/assets/icon _menu.svg";
import { colors } from "@/styles/colors";

const NavbarSC = styled.div`
  width: 100%;
  height: 120px;

  position: absolute;
`;

export const IconLogoSC = styled(IconLogoRapunzelSolidaria)`
  width: 180px;

  position: absolute;
  z-index: 1;
  left: 50%;
  top: 20%;
  transform: translate(-50%);
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
  color: ${colors.secondary_color_green_37DBC2};
`;

export const ButtonSC = styled.button<{ outlined?: boolean }>`
  height: 35px;
  color: ${(props) =>
    props.outlined
      ? colors.secondary_color_green_37DBC2
      : colors.primary_color_violet_A73AA7};
  border-width: ${(props) => props.outlined && "0px"};
  font-weight: 700;
  border-radius: 17.5px;
  padding: 0px 10px 0px 10px;
  background-color: ${(props) =>
    props.outlined ? "transparent" : colors.secondary_color_green_37DBC2};
`;

const Navbar = () => {
  return (
    <>
      <NavbarSC className="container-fluid d-flex justify-content-center align-items-center">
        <IconLogoSC />
        <div className="col-10 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <IconMenuSC />
            <TextSC>Menu</TextSC>
          </div>
          <div className="d-flex gap-5 align-items-center">
            <ButtonSC>Quero ajudar</ButtonSC>
            <ButtonSC outlined>Entre em contato</ButtonSC>
          </div>
        </div>
      </NavbarSC>
    </>
  );
};

export default Navbar;
