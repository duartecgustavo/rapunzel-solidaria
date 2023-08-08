import { Text } from "@/components/shareds";
import { colors } from "@/styles/colors";
import {
  EmailSvgSC,
  FacebookSvgSC,
  FooterSC,
  InstagramSvgSC,
  WhatsAppSvgSC,
  YoutubeSvgSC,
} from "./style";

const Footer = () => {
  return (
    <>
      {/* pendente - ajustar responsividade, com base no prototipo figma versão mobile */}
      <FooterSC className="d-flex container-fluid justify-content-center align-items-center py-5">
        <div className="d-flex col-10 justify-content-between align-items-start">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Text
              size="24px"
              color={colors.white_FFFFFF}
              align="left"
              family="Concert One"
            >
              Entre em contato =]
            </Text>
            <Text
              size="18px"
              color={colors.white_FFFFFF}
              family="Architects Daughter"
              align="left"
            >
              Copyright © 2023 Rapunzel SolidáriaAlguns direitos reservados.
            </Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Text
              size="24px"
              color={colors.white_FFFFFF}
              align="right"
              family="Concert One"
            >
              Faça sua doação e ajude quem precisa!
            </Text>
            <Text
              size="18px"
              color={colors.white_FFFFFF}
              family="Architects Daughter"
              align="right"
            >
              Nos encontre através de nossas redes sociais e formas de contato!
            </Text>
            <div
              style={{
                gap: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/* pendente - ajustar links para todas essas redes, além de hover dos componentes */}
              <a href="">
                <EmailSvgSC />
              </a>
              <a href="">
                <FacebookSvgSC />
              </a>
              <a href="">
                <WhatsAppSvgSC />
              </a>
              <a href="">
                <InstagramSvgSC />
              </a>
              <a href="">
                <YoutubeSvgSC />
              </a>
            </div>
          </div>
        </div>
      </FooterSC>
    </>
  );
};

export default Footer;
