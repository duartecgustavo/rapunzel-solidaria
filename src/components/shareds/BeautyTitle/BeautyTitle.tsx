// eslint-disable-next-line no-unused-vars

import { BackTitleSC, ContainerTitleSC, FrontTitleSC } from "./styles";

interface IBeautyTitle {
  FrontTitle: string;
  BackTitle: string;
  Color: "Violet" | "White";
}

const BeautyTitle = ({ FrontTitle, BackTitle, Color }: IBeautyTitle) => {
  return (
    <ContainerTitleSC className="mb-5">
      <FrontTitleSC color={Color}>{FrontTitle}</FrontTitleSC>
      <BackTitleSC color={Color}>{BackTitle}</BackTitleSC>
    </ContainerTitleSC>
  );
};

export default BeautyTitle;
