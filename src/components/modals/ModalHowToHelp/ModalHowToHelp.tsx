import { BeautyTitle, SocialMidia, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";

const ModalHowToHelp = () => {
  return (
    <>
      <div
        className="modal fade"
        id="ModalHowToHelp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered mx-auto modal-lg">
          <div className="modal-content pb-5">
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
            <div className="modal-body">
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
                  Você pode ajudar de 3 maneiras. Através de doação em dinheiro
                  por nossa causa.
                  <TextMark color="Yellow" family="Architects Daughter">
                    PIX
                  </TextMark>
                  ,
                  <TextMark color="Yellow" family="Architects Daughter">
                    doação de cabelo
                  </TextMark>
                  ou
                  <TextMark color="Yellow" family="Architects Daughter">
                    patrocinando
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
                  PIX
                </Text>
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  33776098000122
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
                  Confira a sessão de COMO DOAR?
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
                <Text
                  style={{ display: "flex", justifyContent: "center" }}
                  family="Architects Daughter"
                  size="18px"
                >
                  <SocialMidia contact="whatsapp" />
                  <SocialMidia contact="phone" />
                  <SocialMidia contact="instagram" copy={true} />
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHowToHelp;
