import { styled } from "styled-components";
import { ReactComponent as Mailman } from "@/assets/mailman.svg";
import { ReactComponent as Link } from "@/assets/icon-link.svg";
import { colors } from "@/styles/colors";

export const FormLinkSC = styled.a`
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  cursor: pointer !important;

  text-decoration: none !important;

  > * {
    color: /* Cor normal */ ;
    text-decoration: none !important;
    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
  }

  &:hover {
    > * {
      color: ${colors.white_FFFFFF};
      text-decoration: none !important;
    }
  }
`;

export const MailmanScgSC = styled(Mailman)``;
export const LinkScgSC = styled(Link)``;
