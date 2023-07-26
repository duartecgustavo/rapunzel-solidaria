// eslint-disable-next-line no-unused-vars
import styled from "styled-components";

const ContainerSC = styled.div<IContainerProps>`
  height: 100vh;
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  background-color: ${(props) => props.color || "black"};

  @media (max-width: 768px) {
    height: auto;
  }
`;

interface IContainerProps {
  children: React.ReactNode;
  background?: string;
  justify?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
}

const Container = ({
  children,
  background,
  justify,
  align,
}: IContainerProps) => {
  return (
    <>
      <ContainerSC
        className="row"
        color={background}
        align={align}
        justify={justify}
      >
        {children}
      </ContainerSC>
    </>
  );
};

export default Container;
