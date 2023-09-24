// eslint-disable-next-line no-unused-vars

import { ContainerSC } from "./styles";

export interface IContainerProps {
  id?: string;
  children: React.ReactNode;
  background?: string;
  justify?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
  height?: string;
  ismobile?: any;
  marginTop?: string;
  marginBottom?: string;
  paddingBottom?: string;
  paddingTop?: string;
}

const Container = ({
  id,
  children,
  background,
  justify,
  align,
  height,
  ismobile,
  marginTop,
  paddingTop,
  paddingBottom
}: IContainerProps) => {
  return (
    <>
      <ContainerSC
        id={id}
        className="row"
        color={background}
        align={align}
        justify={justify}
        height={height}
        ismobile={ismobile}
        marginTop={marginTop}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        {children}
      </ContainerSC>
    </>
  );
};

export default Container;
