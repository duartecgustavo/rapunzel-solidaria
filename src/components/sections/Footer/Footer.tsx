import { Text } from "@/components/shareds";
import { colors } from "@/styles/colors";
import styled from "styled-components";
import { ReactComponent as Email } from "@/assets/icon-email.svg";
import { ReactComponent as Facebook } from "@/assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "@/assets/icon-instagram.svg";
import { ReactComponent as WhatsApp } from "@/assets/icon-whatsApp.svg";
import { ReactComponent as Youtube } from "@/assets/icon-youtube.svg";

const FooterSC = styled.div`
  width: 100%;
  background: ${colors.seven_color_violet_dark_6E36B3};
`;

export const EmailSvgSC = styled(Email)``;
export const FacebookSvgSC = styled(Facebook)``;
export const InstagramSvgSC = styled(Instagram)``;
export const WhatsAppSvgSC = styled(WhatsApp)``;
export const YoutubeSvgSC = styled(Youtube)``;

const Footer = () => {
  return (
    <>
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
