import styled from "styled-components";

export interface IContainerPropsSC {
  id?: string;
  children: React.ReactNode;
  background?: string;
  justify?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
  height?: string;
  ismobile?: any;
  marginTop?: string;
  marginBottom?: string;
  pBottom?: string;
  pTop?: string;
}

export const ContainerSC = styled.div<IContainerPropsSC>`
  height: ${(props) => props.height || "100vh"};
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  background-color: ${(props) => props.color || "black"};
  margin-top: ${(props) => props.marginTop || "none"};
  padding-top: ${(props) => (props.pTop ? props.pTop : "100px")};
  padding-bottom: ${(props) => (props.pBottom ? props.pBottom : "100px")};

  @media (max-width: 768px) {
    height: auto;
    display: ${(props) => (Boolean(!props.ismobile) ? "flex" : "none")};
    padding-top: ${(props) => (props.pTop ? props.pTop : "50px")};
  }
`;
