import { BeautyTitle, SocialMidia, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";

const ModalContact = () => {
  return (
    <>
      <div
        className="modal fade"
        id="ModalContact"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered mx-auto modal-lg"
          style={{ height: "100%" }}
        >
          <div className="modal-content pb-5">
            <div
              className="modal-header d-flex justify-content-end"
              style={{ borderBottomColor: `1px solid ${colors.black_transparent_25}` }}
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
                  FrontTitle="Quero ajudar!"
                  BackTitle="AGORA"
                  Color="Violet"
                />
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  Você pode ajudar de 3 maneiras. Através de doação em dinheiro
                  via pagamento PIX, doação de cabelo ou patrocinando nossa
                  causa.
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
                  PIX
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                  copy={true}
                  color={colors.black_transparent_80}
                >
                  66719022000144
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
                  DOE CABELO
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  Confira a sessão de <TextMark>COMO DOAR?</TextMark>
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
                  Fale direto conosco!
                </Text>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <SocialMidia
                    contact="whatsapp"
                    copy={true}
                    color={colors.black_transparent_80}
                  />
                  <SocialMidia
                    contact="phone"
                    copy={true}
                    color={colors.black_transparent_80}
                  />
                  <SocialMidia
                    contact="instagram"
                    copy={true}
                    color={colors.black_transparent_80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContact;
