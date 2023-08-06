import { GirlCardLinkToSection } from "@/components/sections";
import { BeautyTitle } from "@/components/shareds";

const PrimaryPage = () => {
    return <>
        <BeautyTitle
            FrontTitle="Quer ajudar? ;]"
            BackTitle="BORA?"
            Color="White"
        />
        <div className="row justify-content-center">
            <GirlCardLinkToSection TxtLink="COMO DOAR" GirlName="Jaqueline" />
            <GirlCardLinkToSection TxtLink="COMO RECEBER" GirlName="Jessica" />
            <GirlCardLinkToSection TxtLink="QUEM SOMOS" GirlName="Joana" />
            <GirlCardLinkToSection TxtLink="DEPOIMENTOS" GirlName="Juliana" />
            <GirlCardLinkToSection TxtLink="AVISOS" GirlName="Jurema" />
        </div>

    </>
}

export default PrimaryPage;