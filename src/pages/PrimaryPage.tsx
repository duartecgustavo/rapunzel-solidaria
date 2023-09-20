import { GirlCardLinkToSection } from "@/components/sections";
import { BeautyTitle } from "@/components/shareds";

// pendente - Ajustar scroll quando clica no link que esta deixando as paginas levemente para baixo

const PrimaryPage = () => {
  return (
    <>
      <BeautyTitle
        FrontTitle="Quer ajudar? ;]"
        BackTitle="BORA?"
        Color="White"
      />
      <div className="row justify-content-center pb-5 containerGirlsCardLinkToSection">
        <GirlCardLinkToSection
          TxtLink="COMO RECEBER"
          GirlName="Jessica"
          href="#HowToReceivePage"
        />
        <GirlCardLinkToSection
          TxtLink="APOIADORES"
          GirlName="Jurema"
          href="#Apoiadores"
        />
        <GirlCardLinkToSection
          TxtLink="COMO DOAR"
          GirlName="Jaqueline"
          href="#HowToDonatePage"
        />
        <GirlCardLinkToSection
          TxtLink="DEPOIMENTOS"
          GirlName="Juliana"
          href="#DepositionsPage"
        />
        <GirlCardLinkToSection
          TxtLink="QUEM SOMOS"
          GirlName="Joana"
          href="#WhoWeArePage"
        />
      </div>
    </>
  );
};

export default PrimaryPage;
