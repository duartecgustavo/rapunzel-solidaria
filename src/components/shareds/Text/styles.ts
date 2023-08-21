import styled from "styled-components";
import { ITextProps } from "./Text";

export const TextSC = styled.p<ITextProps>`
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "center"};
  font-family: ${(props) => `${props.family} !important`};
  gap: ${(props) => props.textgap || "0px"};
  cursor: cell;
  user-select: none;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center !important;
    flex-direction: column !important;
    font-size: 18px;
  }
`;
