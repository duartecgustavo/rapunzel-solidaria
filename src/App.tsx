import "@/App.css";
import { Footer, GirlCardLinkToSection, Navbar } from "@/components/sections";
import { BeautyTitle, Container } from "@/components/shareds";
import { colors } from "@/styles/colors";

// pendente - Criar Readme maneiro
// pendente - FIGMA, Criar prototipo mobile

function App() {
  return (
    <>
      <Navbar />
      {/* pendente - Retirar essa sessão quando for mobile  */}
      <Container background={colors.primary_color_violet_A73AA7}>
        {/* pendente - Criar componente - page - que englobe esses dois caras em algo unico  */}
        <BeautyTitle
          FrontTitle="Quer ajudar? ;]"
          BackTitle="BORA?"
          Color="White"
        />
        <div className="row justify-content-center">
          <GirlCardLinkToSection TxtLink="COMO DOAR" GirlName="Jaqueline" />
          <GirlCardLinkToSection TxtLink="COMO RECEBER" GirlName="Jessica" />
          <GirlCardLinkToSection TxtLink="QUEM SOMOS" GirlName="Joana" />
          <GirlCardLinkToSection TxtLink="DEPOIMENTOS" GirlName="Juliana" />
          <GirlCardLinkToSection TxtLink="AVISOS" GirlName="Jurema" />
        </div>
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
      {/* pendente - Criar componente - page - que englobe o footer  */}
      <Footer />
    </>
  );
}

export default App;
