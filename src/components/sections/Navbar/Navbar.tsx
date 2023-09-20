// eslint-disable-next-line no-unused-vars
import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { ButtonSC, IconLogoSC, IconMenuSC, NavbarSC, TextSC } from "./styles";

// pendente - quando for mobile, criar referencias dos links

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
    const headertopbuttonLocal: any = document.querySelector(
      "#header-top-button-how-to-help"
    );
    header.classList.toggle("scroll-active", window.scrollY > 60);
    headertopbuttonLocal.classList.toggle("scroll-active", window.scrollY > 60);
  });

  return (
    <>
      <NavbarSC
        className="d-flex container-fluid justify-content-center align-items-center"
        id="header-top"
      >
        <div className="d-flex col-10 justify-content-between align-items-center">
          <IconLogoSC />
          <div
            className="gap-2 mobile"
            style={{ position: "relative" }}
            onClick={() => setDropdown(!dropdown)}
            ref={dropdownRef}
          >
            <TextSC>MENU</TextSC>
            <IconMenuSC />
            {dropdown && <Dropdown />}
          </div>

          <div className="d-flex gap-5 align-items-center desktop">
            <ButtonSC
              isoutlined="true"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#ModalLocal"
            >
              Onde estamos?
            </ButtonSC>
            <ButtonSC
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#ModalContact"
              id="header-top-button-how-to-help"
            >
              Quero ajudar 🥰
            </ButtonSC>
          </div>
        </div>
      </NavbarSC>
    </>
  );
};

export default Navbar;
