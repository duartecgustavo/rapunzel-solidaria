import { BeautyTitle } from "@/components/shareds";
import {
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
import { colors } from "@/styles/colors";

// pendente - ADICIONAR APOIADORES

const Supporters = () => {
  return (
    <>
      <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "80px",
          background: colors.white_gray_E7E7E7,
        }}
      >
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
      </div>
    </>
  );
};

export default Supporters;
