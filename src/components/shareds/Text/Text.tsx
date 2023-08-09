import { TextSC } from "./styles";

export interface ITextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: "left" | "center" | "right";
  family?: "Architects Daughter" | "Concert One";
  style?: React.CSSProperties;
}

const Text = ({ children, color, size, align, family, style }: ITextProps) => {
  return (
    <>
      <TextSC
        color={color}
        size={size}
        align={align}
        family={family}
        style={style}
      >
        {children}
      </TextSC>
    </>
  );
};

export default Text;
