// eslint-disable-next-line no-unused-vars
import { ButtonSC, IconLogoSC, IconMenuSC, NavbarSC, TextSC } from "./styles";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const header: any = document.querySelector("#header-top");
    header.classList.toggle("scroll-active", window.scrollY > 60);
  });

  return (
    <>
      <NavbarSC
        className="container-fluid d-flex justify-content-center align-items-center"
        id="header-top"
      >
        <IconLogoSC />
        <div className="col-10 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <IconMenuSC />
            <TextSC>Menu</TextSC>
          </div>
          <div className="d-flex gap-5 align-items-center">
            <ButtonSC>Quero ajudar</ButtonSC>
            <ButtonSC outlined>Entre em contato</ButtonSC>
          </div>
        </div>
      </NavbarSC>
    </>
  );
};

export default Navbar;
