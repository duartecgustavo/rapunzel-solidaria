import { BeautyTitle } from "@/components/shareds";
import {
  ContainerSupportersSC,
  LogoBigLarSC,
  LogoClaroSC,
  LogoCosanSC,
  LogoDrAgoraSC,
  LogoMsdSC,
  LogoNaturaSC,
  LogoSeconSC,
  LogoStudioSC,
  LogoTokyoMarineSC,
  LogoYpirangaSC,
} from "./styles";

const Supporters = () => {
  return (
    <>
      <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
      <ContainerSupportersSC>
        <LogoBigLarSC />
        <LogoClaroSC />
        <LogoCosanSC />
        <LogoDrAgoraSC />
        <LogoMsdSC />
        <LogoNaturaSC />
        <LogoSeconSC />
        <LogoStudioSC />
        <LogoTokyoMarineSC />
        <LogoYpirangaSC />
      </ContainerSupportersSC>
    </>
  );
};

export default Supporters;
