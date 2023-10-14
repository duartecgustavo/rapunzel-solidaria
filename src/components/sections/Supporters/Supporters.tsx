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

const Supporters = () => {
  return (
    <>
      <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
      <div
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "80px",
          paddingBottom: "100px",
          background: "rgb(213,213,213)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(186,186,186,0) 40%, rgba(186,186,186,1) 100%)",
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
