import styled from "styled-components";
import { ReactComponent as Aspas } from "@/assets/icon-aspas.svg";
import { colors } from "@/styles/colors";

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

export const ContainerCardsDepositinonsFC = styled.div<{ overflow: boolean }>`
  position: relative;
  height: ${(props) => (props.overflow ? "auto" : "400px")};
  overflow: ${(props) => (props.overflow ? "auto" : "hidden")};
`;

export const ButtonExpandContainerCards = styled.button`
  width: 70%;
  height: 100px;
  background: red;
  position: absolute;
  bottom: 0px;
  background-color: ${colors.six_color_orange_C18151_80};
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(193, 129, 81, 0.6);
  }
`;
