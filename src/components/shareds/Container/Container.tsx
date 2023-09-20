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
  paddingTop?: string;
}

// pendente - deixar margim top e bottom das paginas em um padrão, de preferencia iguais e com bastante margin quando na web

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
      >
        {children}
      </ContainerSC>
    </>
  );
};

export default Container;
