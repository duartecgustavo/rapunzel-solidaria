import { BeautyTitle, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { MailmanScgSC, LinkScgSC, FormLinkSC } from "./styles";
import { styled } from "styled-components";

const ContainerTextsSC = styled.div`
    gap: 56px;
    @media (max-width: 768px) {
        gap: 16px;
    }
`;

const HowToReceive = () => {
    return (<>
        <BeautyTitle
            FrontTitle="Como receber?"
            BackTitle="RECEBER"
            Color="White"
        />
        <ContainerTextsSC className="row justify-content-center col-10 col-sm-8">
            <Text
                size="28px"
                color={colors.white_FFFFFF}
                align="left"
                family="Concert One"
                style={{ display: "flex", justifyContent: "center" }}
            >
                Doamos Amor em forma de Perucas!
            </Text>
            <Text
                withtextmark={"true"}
                color={colors.white_FFFFFF}
                family="Architects Daughter"
                size="22px"
            >
                Para receber uma peruca em sua casa basta <TextMark color="White">clicar no LINK abaixo.</TextMark>
            </Text>
            <FormLinkSC href="https://youtu.be/4kgefGqOJPs" target="_blanck">
                <Text
                    family="Concert One"
                    size="36px"
                    color={colors.white_transparent_70}
                    style={{ cursor: "pointer" }}
                >
                    CLIQUE AQUI
                </Text>
                <LinkScgSC />
            </FormLinkSC>

            <Text
                style={{ display: "block", flexDirection: "row", justifyContent: "center", alignItems: "center" }}
                withtextmark={"true"}
                color={colors.white_FFFFFF}
                family="Architects Daughter"
                size="22px"
            >
                Em seguida preencha <TextMark color="White">ATENTAMENTE</TextMark> o formulário, respondendo a todos. os campos com muito cuidado.
            </Text>
            <Text
                withtextmark={"true"}
                color={colors.white_FFFFFF}
                family="Architects Daughter"
                size="22px"
            >
                <TextMark color="White">E MUITO IMPORTANTE!</TextMark>
            </Text>
            <Text
                withtextmark={"true"}
                color={colors.white_FFFFFF}
                family="Architects Daughter"
                size="22px"
            >
                Por favor, envie uma foto sua <TextMark color="White">antes e depois</TextMark> do tratamento para que possamos te mandar uma peruca que combine com você e te deixe ainda mais linda !
            </Text>
            <MailmanScgSC className="mt-2" />
        </ContainerTextsSC>
    </>)
}

export default HowToReceive;