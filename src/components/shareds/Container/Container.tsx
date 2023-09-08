// eslint-disable-next-line no-unused-vars

import { ContainerSC } from "./styles";

export interface IContainerProps {
  children: React.ReactNode;
  background?: string;
  justify?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
  height?: string;
  ismobile?: any;
  marginTop?: string;
  paddingTop?: string;
}

const Container = ({
  children,
  background,
  justify,
  align,
  height,
  ismobile,
  marginTop,
  paddingTop
}: IContainerProps) => {
  return (
    <>
      <ContainerSC
        className="row"
        color={background}
        align={align}
        justify={justify}
        height={height}
        ismobile={ismobile}
        marginTop={marginTop}
        paddingTop={paddingTop}
      >
        {children}
      </ContainerSC>
    </>
  );
};

export default Container;
