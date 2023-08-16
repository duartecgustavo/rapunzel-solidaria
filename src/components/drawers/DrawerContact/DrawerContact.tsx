import { BeautyTitle, SocialMidia, Text, TextMark } from "@/components/shareds";
import { colors } from "@/styles/colors";

const DrawerContact = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        id="drawerContact"
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
        <div className="modal-body px-5">
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
              Você pode ajudar de 3 maneiras. Através de doação em dinheiro via
              pagamento PIX, doação de cabelo ou patrocinando nossa causa.
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
              style={{ display: "flex !important", justifyContent: "center" }}
              family="Architects Daughter"
              size="18px"
              copy={true}
              color={colors.black_transparent_80}
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
            <Text
              style={{ display: "flex", justifyContent: "center" }}
              family="Architects Daughter"
              size="18px"
            >
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
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerContact;
