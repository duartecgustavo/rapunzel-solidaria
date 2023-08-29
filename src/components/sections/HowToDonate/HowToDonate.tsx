import { BeautyTitle } from "@/components/shareds";
import CardDonate from "./CardDonate";
import img1 from "../../../assets/HowToDonate/img1.png";
import img2 from "../../../assets/HowToDonate/img2.png";
import img3 from "../../../assets/HowToDonate/img3.png";
import img4 from "../../../assets/HowToDonate/img4.png";
import img5 from "../../../assets/HowToDonate/img5.png";
import img6 from "../../../assets/HowToDonate/img6.png";
import img7 from "../../../assets/HowToDonate/img7.png";
import img8 from "../../../assets/HowToDonate/img8.png";
import img9 from "../../../assets/HowToDonate/img9.png";

const HowToDonate = () => {
  return (
    <>
      <div className="row justify-content-center my-5">
        <BeautyTitle FrontTitle="Como doar?" BackTitle="DOE" Color="White" />
        <div className="row justify-content-center my-5 col-10 col-xxl-8 gap-5">
          <CardDonate
            img={img1}
            text="Aceitamos qualquer tipo de cabelo, de qualquer cor, inclusive grisalhos. Pode ter química, ser liso ou crespo!"
            number={1}
          />
          <CardDonate
            img={img2}
            text="O cabelo deve ter, NO MÍNIMO, 20cm de comprimento, medido a partir do elástico."
            number={2}
          />
          <CardDonate
            img={img3}
            text="Diga ao cabeleireiro que você está cortando para doar. O cabelo deverá ser preso bem firme com elástico. O corte deverá ser feito com o cabelo SECO. Evite enviar o cabelo molhado pois corre o risco de estragar e não poderemos utilizar."
            number={3}
          />
          <CardDonate
            img={img4}
            text="Se quiser, você pode tirar uma foto segurando o cabelo cortado e postar NAS SUAS REDES SOCIAIS usando as hashtags: #rapunzelsolidaria #doeseucabelo #cabelocresce #doarfazbem #gratidao #perucasdobem #perucasdeamor"
            number={4}
          />
          <CardDonate
            img={img5}
            text="Coloque o cabelo cortado bem amarrado no elástico em uma sacola/saquinho e depois em uma caixa ou envelope para nos enviar."
            number={5}
          />
          <CardDonate
            img={img6}
            text="Pronto! Agora é só enviar para nosso endereço: Caixa Postal 61002 - CEP: 05424-970 - Pinheiros -São Paulo - SP ou entregar pessoalmente nos endereços do passo 8.
Ah! NÃO SE PREOCUPE, VAMOS SEMANALMENTE AO CORREIO RETIRAR AS DOAÇÕES! "
            number={6}
          />
          <CardDonate
            img={img7}
            text="Está quase terminando, agora é só preencher o cadastro não esquecendo de colocar o código do correio, para que possamos confirmar o recebimento de sua doação. TEMOS UM PRAZO DE ATÉ 60 DIAS PARA VERIFICAR AS DOAÇÕES RECEBIDAS E ENVIAR O EMAIL!"
            number={7}
          />
          <CardDonate
            img={img8}
            text="Endereços para entrega pessoalmente em São Paulo e ABC"
            number={8}
          />
          <CardDonate
            img={img9}
            text="Onde posso cortar o cabelo e já entregar?"
            number={9}
          />
        </div>
      </div>
    </>
  );
};

export default HowToDonate;
