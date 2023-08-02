// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { ButtonSC, IconLogoSC, IconMenuSC, NavbarSC, TextSC } from "./styles";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

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
          <IconLogoSC />
          <div className="gap-2 mobile" style={{ position: "relative" }} onClick={() => setDropdown(!dropdown)}>
            <TextSC>MENU</TextSC>
            <IconMenuSC />
            {dropdown &&
              <ul style={{
                background: "white",

                position: "absolute",
                top: "35px",

                padding: "8px",
                borderRadius: "8px",
              }}>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
              </ul>
            }
          </div>

          <div className="d-flex gap-5 align-items-center desktop">
            <ButtonSC outlined>Entre em contato</ButtonSC>
            <ButtonSC>Quero ajudar</ButtonSC>
          </div>
        </div>
      </NavbarSC>
    </>
  );
};

export default Navbar;
