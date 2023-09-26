import { BeautyTitle } from "@/components/shareds";
import CardDepositions from "./CardDepositions";
import DepositionForm from "./DepositionForm";

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
    deposition: [
      "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
      "dodododododod",
      "LULULULULU",
    ],
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
  {
    title: "Titulo 4",
    deposition: [
      "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
      "bobobobobo",
      "LULULULULU",
    ],
    name: "Nome4",
  },
  {
    title: "Titulo 4",
    deposition: ["LALALALAA4", "bobobobobo", "LULULULULU"],
    name: "Nome4",
  },
  {
    title: "Titulo 4",
    deposition: [
      "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
      "bobobobobo",
      "LULULULULU",
    ],
    name: "Nome4",
  },
  {
    title: "Titulo 4",
    deposition: [
      "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
      "bobobobobo",
      "LULULULULU",
    ],
    name: "Nome4",
  },
  {
    title: "Titulo 4",
    deposition: [
      "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
      "bobobobobo",
      "LULULULULU",
    ],
    name: "Nome4",
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

      {/* pendente - quando mobile, ajustar grid */}

      <div className="d-flex justify-content-center">
        <div className="row col-4">
          <div className="col-12">
            {array.map(
              (item, index) =>
                index % 2 == 0 && (
                  <CardDepositions
                    key={index}
                    title={item.title}
                    deposition={item.deposition}
                    name={item.name}
                  />
                )
            )}
          </div>
        </div>
        <div className="row col-4">
          <div className="col-12">
            {array.map(
              (item, index) =>
                index % 2 == 1 && (
                  <CardDepositions
                    key={index}
                    title={item.title}
                    deposition={item.deposition}
                    name={item.name}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Depositions;
