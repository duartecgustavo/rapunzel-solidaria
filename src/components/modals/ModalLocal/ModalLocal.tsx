import { BeautyTitle, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";

const ModalLocal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="ModalLocal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered mx-auto modal-xl"
          style={{ height: "100%" }}
        >
          <div className="modal-content">
            <div
              className="modal-header d-flex justify-content-end"
              style={{
                borderBottomColor: `1px solid ${colors.black_transparent_25}`,
              }}
            >
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pb-5 px-5">
              <div>
                <BeautyTitle
                  FrontTitle="Onde estamos?"
                  BackTitle="LOCAL"
                  Color="Violet"
                />
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  Rua José Ferreira, 250 - Vila Esperança -{" "}
                  <TextMark color="Yellow" family="Architects Daughter">
                    {" "}
                    De terça a sábado das 10h às 17h.{" "}
                  </TextMark>
                </Text>
              </div>
              <div className="mt-3">
                <Text
                  size="24px"
                  color={colors.five_color_violet_pink_BC6BFA}
                  align="left"
                  family="Concert One"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Pontos de coleta!
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  CLÍNICA VIDA NOVA - Rua Doutor Almeida Prado, 256 - Centro -
                  De segunda a sexta das 8h às 18h.
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  ESCOLA SABER MAIS - Rua João Figueiredo, 920 - Jardim Paulista
                  - De segunda a sexta das 8h às 17h.
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  INSTITUTO NOVO CAMINHO - Av. Senador Vergueiro, 1520 - São
                  Bernardo do Campo - De terça a sábado das 8h às 17h.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLocal;
