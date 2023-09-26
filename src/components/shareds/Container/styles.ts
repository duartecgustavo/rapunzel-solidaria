import styled from "styled-components";
import { IContainerProps } from "./Container";

export const ContainerSC = styled.div<IContainerProps>`
  height: ${(props) => props.height || "100vh"};
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  background-color: ${(props) => props.color || "black"};
  margin-top: ${(props) => props.marginTop || "none"};
  padding-top: ${(props) => props.paddingTop || "100px"};
  padding-bottom: ${(props) => props.paddingBottom || "100px"};

  @media (max-width: 768px) {
    height: auto;
    display: ${(props) => (Boolean(!props.ismobile) ? "flex" : "none")};
    padding-top: ${(props) => props.paddingTop || "50px"};
  }
`;
