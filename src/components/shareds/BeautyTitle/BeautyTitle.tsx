// eslint-disable-next-line no-unused-vars

import { BackTitleSC, ContainerTitleSC, FrontTitleSC } from "./styles";

interface IBeautyTitle {
  FrontTitle: string;
  BackTitle: string;
  Color: "Violet" | "White";
}

const BeautyTitle = ({ FrontTitle, BackTitle }: IBeautyTitle) => {
  return (
    <ContainerTitleSC>
      <FrontTitleSC>{FrontTitle}</FrontTitleSC>
      <BackTitleSC>{BackTitle}</BackTitleSC>
    </ContainerTitleSC>
  );
};

export default BeautyTitle;
