import { Text } from "@/components/shareds";
import CardNumber from "./CardNumber";
import { CardStepImg, CardStepText, DonateCardSC } from "./styles";

interface ICardDonateProps {
  img: string;
  text: string;
  number: number;
}

const CardDonate = ({ img, text, number }: ICardDonateProps) => {
  return (
    <>
      <DonateCardSC>
        <CardNumber number={number} />
        {/* <CardStepImg>
          <img src={img} alt="" />
        </CardStepImg> */}
        <CardStepImg src={img} alt="" />
        <CardStepText>
          <Text family="Architects Daughter" size="18px">
            {text}
          </Text>
        </CardStepText>
      </DonateCardSC>
    </>
  );
};

export default CardDonate;
