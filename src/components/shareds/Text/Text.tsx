import { TextSC } from "./styles";

export interface ITextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: "left" | "center" | "right";
  family?: "Architects Daughter" | "Concert One";
}

const Text = ({ children, color, size, align, family }: ITextProps) => {
  return (
    <>
      <TextSC color={color} size={size} align={align} family={family}>
        {children}
      </TextSC>
    </>
  );
};

export default Text;
