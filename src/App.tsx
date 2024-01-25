import "@/App.css";
import { Footer, Navbar } from "@/components/sections";
import { Container } from "@/components/shareds";
import ButtonGoTop from "@/components/shareds/ButtonGoTop/ButtonTop";
import {
  DepositionsPage,
  Drawers,
  HowToDonatePage,
  HowToReceivePage,
  Modals,
  PrimaryPage,
  PrimaryPageMobile,
  WhoWeArePage,
} from "@/pages";
import SupportersPage from "@/pages/SupportersPage";
import { colors } from "@/styles/colors";
import { isMobile } from "react-device-detect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="goToTopRef" />
      <Container
        background={colors.primary_color_violet_A73AA7}
        height="100vh"
        paddingTop="0px"
        paddingBottom="0px"
      >
        {isMobile ? <PrimaryPageMobile /> : <PrimaryPage />}
      </Container>
      <ToastContainer />
      <Container
        id="WhoWeArePage"
        background={colors.white_FFFFFF}
        height="auto"
      >
        <WhoWeArePage />
      </Container>
      <Container
        id="HowToDonatePage"
        background={colors.third_color_violet_blue_6F66BA}
        height="auto"
      >
        <HowToDonatePage />
      </Container>
      <Container
        id="HowToReceivePage"
        background={colors.five_color_violet_pink_BC6BFA}
        height="auto"
        paddingBottom="none !important"
      >
        <HowToReceivePage />
      </Container>
      <Container
        id="Apoiadores"
        background={colors.white_FFFFFF}
        height="auto"
        paddingBottom="0px"
      >
        <SupportersPage />
      </Container>
      <Container
        id="DepositionsPage"
        background={colors.six_color_orange_C18151}
        height="auto"
      >
        <DepositionsPage />
      </Container>
      <ButtonGoTop />
      <Footer />
      <Modals />
      <Drawers />
    </>
  );
}

export default App;
