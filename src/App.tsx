import "@/App.css";
import { Footer, Navbar } from "@/components/sections";
import { Container } from "@/components/shareds";
import { colors } from "@/styles/colors";
import PrimaryPage from "@/pages/PrimaryPage";
import Modals from "@/pages/Modals";
import Drawers from "@/pages/Drawers";

// pendente - FIGMA, Criar prototipo mobile

function App() {
  return (
    <>
      <Navbar />

      <Container background={colors.primary_color_violet_A73AA7} mobile={false}>
        <PrimaryPage />
      </Container>
      <Container background="red" height="10vh">
        <div className="col-10">QUEM SOMOS</div>
      </Container>
      <Container background="green" height="10vh">
        <div className="col-10">COMO DOAR</div>
      </Container>
      <Container background="blue" height="10vh">
        <div className="col-10">COMO RECEBER</div>
      </Container>
      <Container background="violet" height="10vh">
        <div className="col-10">APOIADORES</div>
      </Container>
      <Container background="orange" height="10vh">
        <div className="col-10">DEPOIMENTOS</div>
      </Container>
      <Footer />
      <Modals />
      <Drawers />
    </>
  );
}

export default App;
