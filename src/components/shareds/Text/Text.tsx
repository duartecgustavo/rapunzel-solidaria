import { CopySvgSC } from "../SocialMidia/styles";
import { TextSC } from "./styles";

export interface ITextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: "left" | "center" | "right";
  family?: "Architects Daughter" | "Concert One";
  style?: React.CSSProperties;
  copy?: boolean;
  textgap?: any;
}

const Text = ({
  copy = false,
  children,
  color,
  size,
  align,
  family,
  style,
}: ITextProps) => {
  function copyToClipboard() {
    if (copy && children) {
      const textToCopy = children.toString();
      navigator.clipboard.writeText(textToCopy);
    }
  }
  return (
    <>
      <TextSC
        color={color}
        size={size}
        align={align}
        family={family}
        style={style}
        onClick={copyToClipboard}
        textgap={copy ? "4px" : undefined}
      >
        {children}
        {copy && <CopySvgSC color={color && color} />}
      </TextSC>
    </>
  );
};

export default Text;
