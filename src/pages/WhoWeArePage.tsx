import { BeautyTitle, Text } from "@/components/shareds";
import { colors } from "@/styles/colors";

const WhoWeArePage = () => {
  return (
    <>
      <div className="row justify-content-center">
        <BeautyTitle
          FrontTitle="Quem somos? ;]"
          BackTitle="NÓS"
          Color="Violet"
        />
        <div className="row justify-content-center gap-5 mt-4 col-10 col-sm-8">
          <Text
            style={{ display: "flex", justifyContent: "center" }}
            family="Architects Daughter"
            size="22px"
          >
            Somos uma Organização sem Fins Econômicos, chamada Associação
            Rapunzel Solidária.
          </Text>
          <Text
            style={{ display: "flex", justifyContent: "center" }}
            family="Architects Daughter"
            size="22px"
          >
            Recebemos doações de cabelos de todos os lugares do Brasil e do
            Mundo e os transformamos, com a ajuda de nossos peruqueiros
            parceiros, em lindas perucas que levarão amor, esperança, fé e
            sorrisos para tantas pessoas que precisam!
          </Text>
          <Text
            style={{ display: "flex", justifyContent: "center" }}
            family="Architects Daughter"
            size="22px"
          >
            Entregamos as perucas para crianças, jovens e adultos que estão em
            tratamento do câncer, e outras doenças, como a Alopecia, que causam
            a perda dos cabelos.
          </Text>
          <div>
            <Text
              style={{ display: "flex", justifyContent: "center" }}
              family="Architects Daughter"
              size="22px"
            >
              Elizabeth Lomaski - Presidente fundadora
            </Text>
            <Text
              style={{ display: "flex", justifyContent: "center" }}
              family="Architects Daughter"
              size="22px"
            >
              Alexandre L. Rodrigues - Diretor Administrativo e Financeiro
            </Text>
            <Text
              style={{ display: "flex", justifyContent: "center" }}
              family="Architects Daughter"
              size="22px"
            >
              Toninha Rocha - Produção Perucas
            </Text>
            <Text
              style={{ display: "flex", justifyContent: "center" }}
              family="Architects Daughter"
              size="22px"
            >
              Alessandra Rocha - Atendimento Pacientes
            </Text>
          </div>
          <Text
            size="28px"
            color={colors.five_color_violet_pink_BC6BFA}
            align="left"
            family="Concert One"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Doamos Amor em forma de Perucas!
          </Text>
        </div>
      </div>
    </>
  );
};

export default WhoWeArePage;
