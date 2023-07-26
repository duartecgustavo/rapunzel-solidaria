import "@/App.css";
import { colors } from "@/styles/colors";
import { BeautyTitle, Container } from "@/components/shareds";
import { useState } from "react";
import { GirlCardLinkToSection, Navbar } from "@/components/sections";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container background={colors.primary_color_violet_A73AA7}>
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
      <Container background="red">
        <div className="col-10">dsasd</div>
      </Container>
    </>
  );
}

export default App;
