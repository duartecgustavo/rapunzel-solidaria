import { SocialMidia, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { FooterSC, FooterSectionSC, GridContainerSC } from "./style";

// pendente - ajustar responsividade

const Footer = () => {
  return (
    <>
      <FooterSC className="d-flex container-fluid justify-content-center flex-column align-items-center py-5 gap-5">
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
            <TextMark> redes sociais e formas de contato! </TextMark>
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
            Rua Amaro Cavalheiro, 140 - Pinheiros - De{" "}
            <TextMark> terça a sábado das 10h às 17h. </TextMark>
          </Text>
        </FooterSectionSC>
        <FooterSectionSC>
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
            HOSPITAL ITACI - Rua Galeno de Almeida, 148 - Pinheiros - De segunda
            a sexta das 7h às 17h.
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
          >
            ESCOLA PROJETO APRENDER - Rua Luos Góis, 1832 - Vila Clementino - De
            segunda a sexta das 8h às 17h.
          </Text>
          <Text
            size="18px"
            color={colors.white_FFFFFF}
            family="Architects Daughter"
            align="left"
          >
            GRUPO ATITUDE - Av. Dom Pedro II, 1240 - Santo André - De terça a
            sábado das 8h às 17h.
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
            Copyright © 2023 Rapunzel Solidária - Todos os direitos reservados.
          </Text>
        </FooterSectionSC>
      </FooterSC>
    </>
  );
};

export default Footer;
