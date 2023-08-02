import styled from "styled-components";

interface ITextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: "left" | "center" | "right";
  family?: "Architects Daughter" | "Concert One";
}

const TextSC = styled.p<ITextProps>`
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "center"};
  font-family: ${(props) => `${props.family} !important`};
`;

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
