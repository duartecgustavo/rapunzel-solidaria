import styled from "styled-components";
import { colors } from "@/styles/colors";
import { ReactComponent as Email } from "@/assets/icon-email.svg";
import { ReactComponent as Facebook } from "@/assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "@/assets/icon-instagram.svg";
import { ReactComponent as WhatsApp } from "@/assets/icon-whatsApp.svg";
import { ReactComponent as Youtube } from "@/assets/icon-youtube.svg";

export const FooterSC = styled.div`
  width: 100%;
  background: ${colors.seven_color_violet_dark_6E36B3};
`;

export const EmailSvgSC = styled(Email)``;
export const FacebookSvgSC = styled(Facebook)``;
export const InstagramSvgSC = styled(Instagram)``;
export const WhatsAppSvgSC = styled(WhatsApp)``;
export const YoutubeSvgSC = styled(Youtube)``;
