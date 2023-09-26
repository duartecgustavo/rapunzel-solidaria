import { styled } from "styled-components";
import { ReactComponent as Mailman } from "@/assets/mailman.svg";
import { ReactComponent as Link } from "@/assets/icon-link.svg";
import { colors } from "@/styles/colors";

export const FormLinkSC = styled.a`
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  cursor: pointer !important;

  text-decoration: none !important;
  stroke: ${colors.white_transparent_70};

  > * {
    color: /* Cor normal */ ;
    text-decoration: none !important;
    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out,
      stroke 0.3s ease-in-out;
  }

  &:hover {
    > * {
      color: ${colors.white_FFFFFF};
      stroke: ${colors.white_FFFFFF};
      text-decoration: none !important;
    }
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const MailmanScgSC = styled(Mailman)`
  height: 260px;
  @media (max-width: 768px) {
    height: 180px;
    margin-top: 50px !important;
  }
`;
export const LinkScgSC = styled(Link)`
  width: 40px;
  @media (max-width: 768px) {
    width: 30px;
  }
`;
