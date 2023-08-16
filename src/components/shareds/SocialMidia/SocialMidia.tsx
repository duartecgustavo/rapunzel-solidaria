import { Text } from "@/components/shareds";
import { colors } from "@/styles/colors";
import {
  EmailSvgSC,
  FacebookSvgSC,
  InstagramSvgSC,
  WhatsAppSvgSC,
  YoutubeSvgSC,
  PhoneSvgSC,
  CopySvgSC,
  SocialMidiaSC,
} from "./styles";
import { socialMediaStrings } from "../../../constants/strings.ts";

interface ISocialMidiaProps {
  copy?: boolean;
  contact:
  | "whatsapp"
  | "youtube"
  | "email"
  | "facebook"
  | "phone"
  | "instagram";
  color?: string;
}

const SocialMidia = ({ copy = false, contact, color }: ISocialMidiaProps) => {
  function copyToClipboard() {
    if (copy) {
      const contactText = socialMediaStrings[contact.toUpperCase().toString()];
      navigator.clipboard.writeText(contactText);
    }
  }

  function SwitchContact() {
    const contactText = socialMediaStrings[contact.toUpperCase().toString()];

    switch (contact) {
      case "whatsapp":
        return (
          <>
            <WhatsAppSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
        break;
      case "facebook":
        return (
          <>
            <FacebookSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
        break;
      case "instagram":
        return (
          <>
            <InstagramSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
        break;
      case "youtube":
        return (
          <>
            <YoutubeSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
        break;
      case "email":
        return (
          <>
            <EmailSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
        break;
      case "phone":
        return (
          <>
            <PhoneSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
        break;
      default:
        return (
          <>
            <PhoneSvgSC />
            <Text
              size="16px"
              family="Architects Daughter"
              color={color ? color : colors.white_FFFFFF}
            >
              {contactText}
            </Text>
          </>
        );
    }
  }

  return (
    <>
      <SocialMidiaSC onClick={copyToClipboard}>
        {SwitchContact()}
        {copy && <CopySvgSC color={color && color} />}
      </SocialMidiaSC>
    </>
  );
};

export default SocialMidia;
