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
  LogoYpirangaSC
} from "./styles";
// pendente - colocar responsividade nos apoiadores

const Supporters = () => {
  return (
    <>
    <div className="container">
      <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
      <div className="row justify-content-center gap-2">
        <LogoBigLarSC className="col-2 col-md-3"/>
        <LogoClaroSC className="col-2 col-md-3"/>
        <LogoCosanSC className="col-2 col-md-3"/>
        <LogoDrAgoraSC className="col-2 col-md-3"/>
        <LogoMsdSC className="col-2 col-md-3"/>
        <LogoNaturaSC className="col-2 col-md-3"/>
        <LogoSeconSC className="col-2 col-md-3"/>
        <LogoStudioSC className="col-2 col-md-3"/>
        <LogoTokyoMarineSC className="col-2 col-md-3"/>
        <LogoYpirangaSC className="col-2 col-md-3"/>
      </div>
    </div>
    </>
  );
};

export default Supporters;
