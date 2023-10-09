import { BeautyTitle, Text } from "@/components/shareds";
import CardDepositions from "./CardDepositions";
import DepositionForm from "./DepositionForm";
import { isMobile } from "react-device-detect";
import { ContainerCardsDepositinonsFC } from "./styles";
import { useState } from "react";

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
  const [containerDepositionsOpen, setContainerDepositionsOpen] =
    useState(false);
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  console.log("isMobile", isMobile);

  return (
    <>
      <BeautyTitle FrontTitle="Depoimentos" BackTitle="FALE!" Color="White" />

      <DepositionForm onSubmit={handleSubmit} />

      {!isMobile ? (
        <ContainerCardsDepositinonsFC
          overflow={containerDepositionsOpen}
          // pendente - ajustar tamanho da exibição dos cards de sepoimentos
          className="d-flex justify-content-center depositionScroll"
        >
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
          {!containerDepositionsOpen && (
            <button
              onClick={() =>
                setContainerDepositionsOpen(!containerDepositionsOpen)
              }
              style={{
                width: "70%",
                height: "100px",
                background: "red",
                position: "absolute",
                bottom: "0px",
                backgroundColor: "rgba(167, 58, 167, 0.8)",
                border: "none",
              }}
            >
              <Text
                size="28px"
                align="left"
                family="Concert One"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                Clique aqui para expandir
              </Text>
            </button>
          )}
        </ContainerCardsDepositinonsFC>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="row col-10">
            {array.map((item, index) => (
              <CardDepositions
                key={index}
                title={item.title}
                deposition={item.deposition}
                name={item.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Depositions;
