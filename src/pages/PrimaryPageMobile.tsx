import { ReactComponent as Joice } from "@/assets/Joice.svg";
import { colors } from "@/styles/colors";
import { BeautyTitleMobile } from "@/components/shareds";
import styled from "styled-components";

export const JoiceSvgSC = styled(Joice)`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const PrimaryPageMobile = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: 0,
          height: "100vh",
          backgroundColor: "red",
          paddingTop: "90px",
          paddingBottom: -20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          background: colors.primary_color_violet_A73AA7,
        }}
      >
        <BeautyTitleMobile
          FrontTitle="Quer ajudar?"
          BackTitle="BORA?"
          Color="White"
        />
        <JoiceSvgSC />
      </div>
    </>
  );
};

export default PrimaryPageMobile;
