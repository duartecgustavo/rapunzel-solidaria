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
              style={{ borderBottom: "none" }}
            >
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pb-5">
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
                  Rua Amaro Cavalheiro, 140 - Pinheiros -{" "}
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
                  HOSPITAL ITACI - Rua Galeno de Almeida, 148 - Pinheiros - De
                  segunda a sexta das 7h às 17h.
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  ESCOLA PROJETO APRENDER - Rua Luos Góis, 1832 - Vila
                  Clementino - De segunda a sexta das 8h às 17h.
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  GRUPO ATITUDE - Av. Dom Pedro II, 1240 - Santo André - De
                  terça a sábado das 8h às 17h.
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
