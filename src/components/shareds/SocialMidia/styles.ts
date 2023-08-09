import styled from "styled-components";
import { ReactComponent as Email } from "@/assets/icon-email.svg";
import { ReactComponent as Facebook } from "@/assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "@/assets/icon-instagram.svg";
import { ReactComponent as WhatsApp } from "@/assets/icon-whatsApp.svg";
import { ReactComponent as Youtube } from "@/assets/icon-youtube.svg";
import { ReactComponent as Phone } from "@/assets/icon-phone.svg";
import { ReactComponent as Copy } from "@/assets/icon-copy.svg";

export const SocialMidiaSC = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 8px;
  padding: 4px;
  user-select: none;
  cursor: cell;
`;

export const CopySvgSC = styled(Copy)``;
export const EmailSvgSC = styled(Email)``;
export const FacebookSvgSC = styled(Facebook)``;
export const InstagramSvgSC = styled(Instagram)``;
export const WhatsAppSvgSC = styled(WhatsApp)``;
export const YoutubeSvgSC = styled(Youtube)``;
export const PhoneSvgSC = styled(Phone)``;
