// eslint-disable-next-line no-unused-vars
import styled from "styled-components";

const ContainerSC = styled.div`
  /* width: 100%; */
  height: 1000px;
`;

interface ContainerProps {
  children: React.ReactNode;
  background?: string;
}

const Container = ({ children, background }: ContainerProps) => {
  console.log("background", background);
  return (
    <>
      <ContainerSC
        className="container-fluid d-flex justify-content-center"
        style={{ backgroundColor: background }}
      >
        {children}
      </ContainerSC>
    </>
  );
};

export default Container;
