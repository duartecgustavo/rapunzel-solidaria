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
        <div style={{ position: "relative" }}>
          <CardNumber number={number} />

          <CardStepImg src={img} alt="" />
        </div>
        <CardStepText className="textScroll">
          <Text family="Architects Daughter" size="18px">
            {text}
          </Text>
        </CardStepText>
      </DonateCardSC>
    </>
  );
};

export default CardDonate;
