import styled from "styled-components";
import { colors } from "@/styles/colors";
import { ReactComponent as Jaqueline } from "@/assets/Jaqueline.svg";
import { ReactComponent as Jessica } from "@/assets/Jessica.svg";
import { ReactComponent as Joana } from "@/assets/Joana.svg";
import { ReactComponent as Juliana } from "@/assets/Juliana.svg";
import { ReactComponent as Jurema } from "@/assets/Jurema.svg";

export const ContainerGirlCardLinkToSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  cursor: pointer;

  :hover {
    font-size: 18.5px;
    transition: font-size 0.1s ease-in;
  }
`;

export const TextLink = styled.p`
  color: ${colors.secondary_color_green_37B0CB};
  font-size: 18px;
  padding-top: 10px;
  font-family: "Architects Daughter" !important;
`;

export const JoanaSvgSC = styled(Joana)`
  &:hover {
    cursor: pointer;
  }
`;
export const JessicaSvgSC = styled(Jessica)`
  &:hover {
    cursor: pointer;
  }
`;
export const JaquelineSvgSC = styled(Jaqueline)`
  &:hover {
    cursor: pointer;
  }
`;
export const JulianaSvgSC = styled(Juliana)`
  &:hover {
    cursor: pointer;
  }
`;
export const JuremaSvgSC = styled(Jurema)`
  &:hover {
    cursor: pointer;
  }
`;
