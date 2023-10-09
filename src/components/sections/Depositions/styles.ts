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

export const FormFC = styled.form`
  gap: 32px;
  padding-bottom: 150px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

export const AspasSvgSC = styled(Aspas)`
  width: 70px;
`;

export const ContainerCardsDepositinonsFC = styled.div`
  position: relative;
  height: ${(props) => (props.overflow ? "auto" : "800px")};
  overflow: ${(props) => (props.overflow ? "auto" : "hidden")};
`;
