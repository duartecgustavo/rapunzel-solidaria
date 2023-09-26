// CARD DEPOSITIONS

import styled from "styled-components";
import { ReactComponent as Aspas } from "@/assets/icon-aspas.svg";

export const ContainerCardDepositionsFC = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 20px !important;
  background-color: white;

  margin-bottom: 16px !important;
`;

export const AspasSvgSC = styled(Aspas)`
  width: 70px;
`;
