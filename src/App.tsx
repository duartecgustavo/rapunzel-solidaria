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
  WhoWeArePage,
} from "@/pages";
import SupportersPage from "@/pages/SupportersPage";
import { colors } from "@/styles/colors";

//
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pendente - FIGMA, Criar prototipo mobile - criar tela principal para mobile

// pendente - TELA DE INICIO MOBILE (CAPA COM O NOME DO SITE E UMA IMAGEM EM SVG)
function App() {
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT,
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  };
  return (
    <>
      <Navbar />
      <div id="goToTopRef"></div>

      <Container
        background={colors.primary_color_violet_A73AA7}
        ismobile="false"
        height="100vh"
      >
        <PrimaryPage />
      </Container>
      {/* Pendente - ajustar toasts */}
      <button onClick={notify}>Notify</button>;
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
