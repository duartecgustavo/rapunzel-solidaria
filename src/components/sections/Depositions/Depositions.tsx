import { BeautyTitle } from "@/components/shareds";
import CardDepositions from "./CardDepositions";
import DepositionForm from "./DepositionForm";

// pendente - Ajustar grid dos depoimentos

interface IDeposition {
  title: string;
  deposition: string[];
  name: string;
}

let array: IDeposition[] = [
  {
    title: "Titulo 1",
    deposition: ["LALALALAA1", "lelelel", "LULULULULU"],
    name: "Nome1",
  },
  {
    title: "Titulo 2",
    deposition: ["LALALALAA2", "dodododododod", "LULULULULU"],
    name: "Nome2",
  },
  {
    title: "Titulo 3",
    deposition: ["LALALALAA3", "sususususus", "LULULULULU"],
    name: "Nome3",
  },
  {
    title: "Titulo 4",
    deposition: ["LALALALAA4", "bobobobobo", "LULULULULU"],
    name: "Nome4",
  },
];

const Depositions = () => {
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <BeautyTitle FrontTitle="Depoimentos" BackTitle="FALE!" Color="White" />

      <DepositionForm onSubmit={handleSubmit} />

      <div
        className="col-10 col-sm-6 gap-2"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {array.map((item, index) => (
          <CardDepositions
            key={index}
            title={item.title}
            deposition={item.deposition}
            name={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default Depositions;
