import { BeautyTitle, Text } from "@/components/shareds";
import CardDepositions from "./CardDepositions";
import DepositionForm from "./DepositionForm";
import { isMobile } from "react-device-detect";
import {
  ButtonExpandContainerCards,
  ContainerCardsDepositinonsFC,
} from "./styles";
import { useState, useEffect } from "react";
import { colors } from "@/styles/colors";
import { Data, enviarDepoimento, pegarDepoimento } from "@/services/connectApi";

interface Depoimento {
  Titulo: string;
  Nome: string;
  Conteudo: string;
  Email: string;
}

const Depositions = () => {
  const [containerDepositionsOpen, setContainerDepositionsOpen] =
    useState<boolean>(false);
  const [arrayDepoimentos, setArrayDepoimentos] = useState<Depoimento[]>([]);

  async function fetchData() {
    try {
      const data = await pegarDepoimento();
      setArrayDepoimentos(data.depoimentos);
      console.log("data:", data);
    } catch (error) {
      console.error("Erro ao buscar depoimento:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    const params: Data = {
      Nome: e.nome,
      Conteudo: e.depoimento,
      Email: e.email,
      Titulo: e.titulo,
    };
    try {
      await enviarDepoimento(params);
      fetchData();
      e.nome = "";
      e.email = "";
      e.titulo = "";
      e.depoimento = "";
    } catch (error) {
      console.error("Erro ao enviar depoimento:", error);
    }
  };

  console.log(isMobile);
  console.log("containerDepositionsOpen", containerDepositionsOpen);
  return (
    <>
      <BeautyTitle FrontTitle="Depoimentos" BackTitle="FALE!" Color="White" />

      <DepositionForm onSubmit={handleSubmit} />
      {!isMobile ? (
        <ContainerCardsDepositinonsFC
          overflow={containerDepositionsOpen ? true : false}
          className="d-flex justify-content-center depositionScroll"
        >
          <div className="row col-4">
            <div className="col-12">
              {arrayDepoimentos?.map(
                (item, index) =>
                  index % 2 == 0 && (
                    <CardDepositions
                      key={index}
                      title={item.Titulo}
                      deposition={item.Conteudo}
                      name={item.Nome}
                    />
                  )
              )}
            </div>
          </div>
          <div className="row col-4">
            <div className="col-12">
              {arrayDepoimentos.map(
                (item, index) =>
                  index % 2 == 1 && (
                    <CardDepositions
                      key={index}
                      title={item.Titulo}
                      deposition={item.Conteudo}
                      name={item.Nome}
                    />
                  )
              )}
            </div>
          </div>
          {!containerDepositionsOpen ? (
            <ButtonExpandContainerCards
              onClick={() =>
                setContainerDepositionsOpen(!containerDepositionsOpen)
              }
            >
              <Text
                size="28px"
                align="left"
                color={colors.white_FFFFFF}
                family="Concert One"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                MOSTRAR TODOS
              </Text>
            </ButtonExpandContainerCards>
          ) : (
            <ButtonExpandContainerCards
              onClick={() =>
                setTimeout(() => {
                  setContainerDepositionsOpen(!containerDepositionsOpen);
                }, 1000)
              }
              href="#goToTopDepoiments"
            >
              <Text
                size="28px"
                align="left"
                color={colors.white_FFFFFF}
                family="Concert One"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                NÃO MOSTRAR TODOS
              </Text>
            </ButtonExpandContainerCards>
          )}
        </ContainerCardsDepositinonsFC>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="row col-10">
            {arrayDepoimentos.map((item, index) => (
              <CardDepositions
                key={index}
                title={item.Titulo}
                deposition={item.Conteudo}
                name={item.Nome}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Depositions;
