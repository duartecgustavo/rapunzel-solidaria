import { BeautyTitle, Text } from "@/components/shareds";
import { BoxRoundedNumberSC, DonateCardSC } from "./styles";

const HowToDonate = () => {
    return (<>
        <BeautyTitle
            FrontTitle="Como doar?"
            BackTitle="DOE"
            Color="White"
        />
        <DonateCardSC>
            <BoxRoundedNumberSC>
                <Text>numero</Text>
            </BoxRoundedNumberSC>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <Text>lalala</Text>
            </div>
        </DonateCardSC>
    </>)
}

export default HowToDonate;