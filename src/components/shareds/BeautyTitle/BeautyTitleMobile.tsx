// eslint-disable-next-line no-unused-vars

import {
  BackTitleSC,
  ContainerTitleMobileSC,
  FrontTitleMobileSC,
} from "./styles";

interface IBeautyTitleMobile {
  FrontTitle: string;
  BackTitle: string;
  MarginTop?: string;
  MarginBottom?: string;
  MarginLeft?: string;
  MarginRight?: string;
  Color: "Violet" | "White";
}

const BeautyTitleMobile = ({
  FrontTitle,
  BackTitle,
  Color,
}: IBeautyTitleMobile) => {
  return (
    <ContainerTitleMobileSC>
      <FrontTitleMobileSC color={Color}>{FrontTitle}</FrontTitleMobileSC>
      <BackTitleSC color={Color}>{BackTitle}</BackTitleSC>
    </ContainerTitleMobileSC>
  );
};

export default BeautyTitleMobile;
