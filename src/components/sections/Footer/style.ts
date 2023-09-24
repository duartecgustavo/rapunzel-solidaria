import styled from "styled-components";
import { colors } from "@/styles/colors";

export const FooterSC = styled.div`
  width: 100%;
  background: ${colors.seven_color_violet_dark_6E36B3};
  padding: 100px;
  gap: 60px;
`;

export const FooterSectionSC = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GridContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px !important;
  gap: 5px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
