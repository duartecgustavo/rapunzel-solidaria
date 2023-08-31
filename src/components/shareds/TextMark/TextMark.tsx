import { TextMarkSC } from "./styles";

export interface ITextMarkProps {
  children: React.ReactNode;
  color?: "White" | "Yellow";
  family?: "Architects Daughter" | "Concert One";
  display?: "flex" | "block" | "initial";
}

const Text = ({ children, color, family, display = "initial" }: ITextMarkProps) => {
  return (
    <>
      <TextMarkSC color={color} family={family} display={display}>
        {children}
      </TextMarkSC>
    </>
  );
};

export default Text;
