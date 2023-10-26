import { ButtonGoTopSC, GoToTopSvgSC } from "./styles";

const ButtonGoTop = () => {

  window.addEventListener("scroll", () => {
    const buttonGoToTop: any = document.querySelector("#buttonGoToTop");
    buttonGoToTop.classList.toggle("scroll-active", window.scrollY > 60);
  });

  return (
    <ButtonGoTopSC href="#goToTopRef" id="buttonGoToTop">
      <GoToTopSvgSC />
    </ButtonGoTopSC>
  );
};

export default ButtonGoTop;
