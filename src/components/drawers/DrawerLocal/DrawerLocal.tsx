import { BeautyTitle, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";

const DrawerLocal = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        id="drawerLocal"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body px-5 pb-5 overflow-scroll">
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
          <div
            className="d-flex flex-column gap-3 mt-3"
            style={{ gap: "10px" }}
          >
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
              CLÍNICA VIDA NOVA - Rua Doutor Almeida Prado, 256 - Centro - De
              segunda a sexta das 8h às 18h.
            </Text>
            <Text
              style={{ display: "flex", justifyContent: "center" }}
              family="Architects Daughter"
              size="18px"
            >
              ESCOLA SABER MAIS - Rua João Figueiredo, 920 - Jardim Paulista -
              De segunda a sexta das 8h às 17h.
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
    </>
  );
};

export default DrawerLocal;
