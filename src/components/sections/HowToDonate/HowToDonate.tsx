import { BeautyTitle } from "@/components/shareds";
import CardDonate from "./CardDonate";
import img1 from "../../../assets/HowToDonate/img1.png";
import img2 from "../../../assets/HowToDonate/img2.png";
import img3 from "../../../assets/HowToDonate/img3.png";
import img4 from "../../../assets/HowToDonate/img4.png";
import img5 from "../../../assets/HowToDonate/img5.png";
import img6 from "../../../assets/HowToDonate/img6.png";
import img7 from "../../../assets/HowToDonate/img7.png";
import img8 from "../../../assets/HowToDonate/img8.png";
import img9 from "../../../assets/HowToDonate/img9.png";

const HowToDonate = () => {
  return (
    <>
      <div className="row justify-content-center mt-5 mb-5">
        <BeautyTitle FrontTitle="Como doar?" BackTitle="DOE" Color="White" />
        <div
          className="row justify-content-center mt-4 col-10 col-sm-8"
          style={{ border: "1px solid red" }}
        >
          <CardDonate img={img1} text="LOREMLOREM LOREM LOREM" number={1} />
          <CardDonate img={img2} text="LOREMLOREM LOREM LOREM" number={2} />
          <CardDonate img={img3} text="LOREMLOREM LOREM LOREM" number={3} />
          <CardDonate img={img4} text="LOREMLOREM LOREM LOREM" number={4} />
          <CardDonate img={img5} text="LOREMLOREM LOREM LOREM" number={5} />
          <CardDonate img={img6} text="LOREMLOREM LOREM LOREM" number={6} />
          <CardDonate img={img7} text="LOREMLOREM LOREM LOREM" number={7} />
          <CardDonate img={img8} text="LOREMLOREM LOREM LOREM" number={8} />
          <CardDonate img={img9} text="LOREMLOREM LOREM LOREM" number={9} />
        </div>
      </div>
    </>
  );
};

export default HowToDonate;
