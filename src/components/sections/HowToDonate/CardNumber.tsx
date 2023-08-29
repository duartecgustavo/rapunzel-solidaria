import { BoxRoundedNumberSC } from "./styles";
import { Text } from "@/components/shareds";

interface ICardNumberProps {
  number: any;
}

const CardNumber = ({ number }: ICardNumberProps) => {
  return (
    <>
      <BoxRoundedNumberSC>
        <Text size="40px" color="White" family="Arbutus">
          {number}
        </Text>
      </BoxRoundedNumberSC>
    </>
  );
};

export default CardNumber;
