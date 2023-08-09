import { TextMarkSC } from "./styles";

export interface ITextMarkProps {
  children: React.ReactNode;
  color?: string;
  family?: "Architects Daughter" | "Concert One";
}

const Text = ({ children, color, family }: ITextMarkProps) => {
  return (
    <TextMarkSC color={color} family={family}>
      {children}
    </TextMarkSC>
  );
};

export default Text;
