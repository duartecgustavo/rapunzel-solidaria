import { GirlCardLinkToSection } from "@/components/sections";
import { BeautyTitle } from "@/components/shareds";



const PrimaryPage = () => {
    return <>
        <BeautyTitle
            FrontTitle="Quer ajudar? ;]"
            BackTitle="BORA?"
            Color="White"

        />
        <div className="row justify-content-center pb-5 teste">
            <GirlCardLinkToSection TxtLink="COMO RECEBER" GirlName="Jessica" />
            <GirlCardLinkToSection TxtLink="AVISOS" GirlName="Jurema" />
            <GirlCardLinkToSection TxtLink="COMO DOAR" GirlName="Jaqueline" />
            <GirlCardLinkToSection TxtLink="DEPOIMENTOS" GirlName="Juliana" />
            <GirlCardLinkToSection TxtLink="QUEM SOMOS" GirlName="Joana" />
        </div>

    </>
}

export default PrimaryPage;