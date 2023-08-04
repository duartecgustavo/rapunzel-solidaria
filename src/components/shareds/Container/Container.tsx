// eslint-disable-next-line no-unused-vars

import { ContainerSC } from "./styles";

export interface IContainerProps {
  children: React.ReactNode;
  background?: string;
  justify?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
  height?: string;
}

const Container = ({
  children,
  background,
  justify,
  align,
  height,
}: IContainerProps) => {
  return (
    <>
      <ContainerSC
        className="row"
        color={background}
        align={align}
        justify={justify}
        height={height}
      >
        {children}
      </ContainerSC>
    </>
  );
};

export default Container;
