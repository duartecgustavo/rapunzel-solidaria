import { SocialMidia, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { FooterSC, FooterSectionSC, GridContainerSC } from "./style";

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <>
      <FooterSC className="d-flex container-fluid justify-content-center flex-column align-items-center">
        <FooterSectionSC>
          <Text
            size="24px"
            color={colors.white_FFFFFF}
            align="left"
            family="Concert One"
            style={{ display: "flex" }}
          >
            Entre em contato com a gente =]
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
            style={{ display: "flex" }}
          >
            Nos encontre através de nossas{" "}
            <TextMark color="White">
              {" "}
              redes sociais e formas de contato!{" "}
            </TextMark>
          </Text>
          <GridContainerSC>
            <SocialMidia contact="whatsapp" />
            <SocialMidia contact="phone" />
            <SocialMidia contact="instagram" copy={true} />
            <SocialMidia contact="facebook" />
            <SocialMidia contact="youtube" />
            <SocialMidia contact="email" />
          </GridContainerSC>
        </FooterSectionSC>
        <FooterSectionSC>
          <Text
            size="24px"
            color={colors.white_FFFFFF}
            align="left"
            family="Concert One"
            style={{ display: "flex" }}
          >
            Onde estamos?
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
            style={{ display: "flex" }}
          >
            Rua José Ferreira, 250 - Vila Esperança - De{" "}
            <TextMark color="White"> terça a sábado das 10h às 17h. </TextMark>
          </Text>
        </FooterSectionSC>
        <FooterSectionSC className="gap-4">
          <Text
            size="24px"
            color={colors.white_FFFFFF}
            align="left"
            family="Concert One"
            style={{ display: "flex" }}
          >
            Pontos de coleta!
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
          >
            CLÍNICA VIDA NOVA - Rua Doutor Almeida Prado, 256 - Centro - De
            segunda a sexta das 8h às 18h.
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
          >
            ESCOLA SABER MAIS - Rua João Figueiredo, 920 - Jardim Paulista - De
            segunda a sexta das 8h às 17h.
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
          >
            INSTITUTO NOVO CAMINHO - Av. Senador Vergueiro, 1520 - São Bernardo
            do Campo - De terça a sábado das 8h às 17h.
          </Text>
        </FooterSectionSC>
        <FooterSectionSC>
          <Text
            size="24px"
            color={colors.white_FFFFFF}
            align="left"
            family="Concert One"
          >
            Faça sua doação e ajude quem precisa!
          </Text>
        </FooterSectionSC>
        <FooterSectionSC>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
          >
            Copyright © {anoAtual} Mechas do Bem - Todos os direitos
            reservados.
          </Text>
        </FooterSectionSC>
      </FooterSC>
    </>
  );
};

export default Footer;
