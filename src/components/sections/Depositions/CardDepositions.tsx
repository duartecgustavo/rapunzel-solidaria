import { Text } from "@/components/shareds";
import { AspasSvgSC, ContainerCardDepositionsFC } from "./styles";

interface ICardDepositionsProps {
  title: string;
  deposition: string[];
  name: string;
}

const CardDepositions = ({
  title,
  deposition,
  name,
}: ICardDepositionsProps) => {
  return (
    <>
      <ContainerCardDepositionsFC>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <AspasSvgSC />
          <Text
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: "initial",
              textAlign: "left",
            }}
            family="Concert One"
            size="18px"
          >
            {title}
          </Text>
        </div>
        {deposition.map((phrase, index) => (
          <Text
            key={index}
            style={{ display: "flex", textAlign: "left" }}
            family="Architects Daughter"
            size="18px"
          >
            {phrase}
          </Text>
        ))}
        <Text
          style={{ display: "flex", justifyContent: "end" }}
          family="Architects Daughter"
          size="18px"
        >
          {name}
        </Text>
      </ContainerCardDepositionsFC>
    </>
  );
};

export default CardDepositions;
