// eslint-disable-next-line no-unused-vars
import { colors } from "@/styles/colors";
import { useEffect, useRef, useState } from "react";
import {
  ButtonSC,
  IconLogoSC,
  IconMenuSC,
  LiSC,
  NavbarSC,
  TextSC,
  UlSC,
} from "./styles";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event: any) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target)
      ) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  window.addEventListener("scroll", () => {
    const header: any = document.querySelector("#header-top");
    header.classList.toggle("scroll-active", window.scrollY > 60);
  });

  return (
    <>
      <NavbarSC
        className="d-flex container-fluid justify-content-center align-items-center"
        id="header-top"
      >
        <div className="d-flex col-10 justify-content-between align-items-center">
          {/* pendente - logo diminuindo bizarramente */}

          <IconLogoSC />
          <div
            className="gap-2 mobile"
            style={{ position: "relative" }}
            onClick={() => setDropdown(!dropdown)}
            ref={dropdownRef}
          >
            <TextSC>MENU</TextSC>
            <IconMenuSC />
            {dropdown && (
              // pendente - fazer referencias as sessões
              <UlSC style={{}}>
                <LiSC
                  style={{
                    borderBottom: `1px solid ${colors.black_transparent_80}`,
                    backgroundColor: `${colors.five_color_violet_pink_BC6BFA_40}`,
                  }}
                >
                  <a href="#" outlined data-bs-toggle="modal" data-bs-target="#ModalContact">Entre em contato.</a>
                </LiSC>
                {/* pendente - ajutar cor da opção de quero ajudar no dropdown */}
                <LiSC>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#ModalHowToHelp">Quero ajudar.</a>
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
            )}
          </div>

          <div className="d-flex gap-5 align-items-center desktop">
            {/* pendente - Ao clicar em entre em contato, deve aparecer um modal */}
            <ButtonSC outlined type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalContact">Entre em contato</ButtonSC>
            {/* pendente - Ao clicar em entre em como ajudar, deve aparecer um modal com as formas de ajuda e apoio (seja pix, doação, patrocinio) */}
            <ButtonSC type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalHowToHelp">Quero ajudar</ButtonSC>
          </div>
        </div>

      </NavbarSC>
    </>
  );
};

export default Navbar;
