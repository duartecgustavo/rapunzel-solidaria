import { colors } from "@/styles/colors";
import { LiSC, UlSC } from "./styles";

// pendente - fazer referencias as sessões
const Dropdown = () => {
  return (
    <>
      <UlSC style={{}}>
        <LiSC
          style={{
            backgroundColor: `${colors.five_color_violet_pink_BC6BFA_40}`,
          }}
        >
          <a
            href="#"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#drawerContact"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            Quero ajudar 🥰
          </a>
        </LiSC>
        <LiSC
          style={{
            borderBottom: `1px solid ${colors.black_transparent_80}`,
            backgroundColor: `${colors.five_color_violet_pink_BC6BFA_40}`,
          }}
        >
          <a
            href="#"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#drawerLocal"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            Onde estamos?
          </a>
        </LiSC>
        <LiSC>
          <a href="#">Como doar?</a>
        </LiSC>
        <LiSC>
          <a href="#">Como receber?</a>
        </LiSC>
        <LiSC>
          <a href="#">Depoimentos.</a>
        </LiSC>
        <LiSC>
          <a href="#">Avisos.</a>
        </LiSC>
      </UlSC>
    </>
  );
};

export default Dropdown;
