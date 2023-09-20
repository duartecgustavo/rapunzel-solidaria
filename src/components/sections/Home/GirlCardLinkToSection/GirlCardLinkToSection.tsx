// eslint-disable-next-line no-unused-vars
import {
  ContainerGirlCardLinkToSection,
  JaquelineSvgSC,
  JessicaSvgSC,
  JoanaSvgSC,
  JulianaSvgSC,
  JuremaSvgSC,
  TextLink,
} from "./styles";

interface IGirlCardLinkToSection {
  TxtLink: string;
  GirlName?: "Jessica" | "Jaqueline" | "Joana" | "Juliana" | "Jurema";
  href?: string;
}

const GirlCardLinkToSection = ({
  TxtLink,
  GirlName,
  href,
}: IGirlCardLinkToSection) => {
  const GetSvgGirl = (GirlName?: any) => {
    switch (GirlName) {
      case "Jessica":
        return <JessicaSvgSC />;
      case "Jaqueline":
        return <JaquelineSvgSC />;
      case "Joana":
        return <JoanaSvgSC />;
      case "Juliana":
        return <JulianaSvgSC />;
      case "Jurema":
        return <JuremaSvgSC />;
      default:
        return <JessicaSvgSC />;
    }
  };

  return (
    <ContainerGirlCardLinkToSection
      href={href}
      className="col-10 col-sm-6 col-md-4 col-lg-2 col-xl-2"
    >
      {GetSvgGirl(GirlName)}
      <TextLink>{TxtLink}</TextLink>
    </ContainerGirlCardLinkToSection>
  );
};

export default GirlCardLinkToSection;
