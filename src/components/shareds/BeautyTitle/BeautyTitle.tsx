// eslint-disable-next-line no-unused-vars

import { BackTitleSC, ContainerTitleSC, FrontTitleSC } from "./styles";

interface IBeautyTitle {
  FrontTitle: string;
  BackTitle: string;
  MarginTop?: string;
  MarginBottom?: string;
  MarginLeft?: string;
  MarginRight?: string;
  Color: "Violet" | "White";
}

const BeautyTitle = ({
  FrontTitle,
  BackTitle,
  Color,
  MarginTop,
  MarginBottom,
  MarginLeft,
  MarginRight,
}: IBeautyTitle) => {
  return (
    <ContainerTitleSC
      className="mb-5"
      marginTop={MarginTop}
      marginBottom={MarginBottom}
      marginLeft={MarginLeft}
      marginRight={MarginRight}
    >
      <FrontTitleSC color={Color}>{FrontTitle}</FrontTitleSC>
      <BackTitleSC color={Color}>{BackTitle}</BackTitleSC>
    </ContainerTitleSC>
  );
};

export default BeautyTitle;
