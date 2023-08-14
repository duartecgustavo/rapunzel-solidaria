import styled from "styled-components";
import { ITextProps } from "./Text";

export const TextSC = styled.p<ITextProps>`
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "center"};
  font-family: ${(props) => `${props.family} !important`};
  cursor: cell;
  user-select: none;
  margin-top: ${(props) => `${props.marginTop} !important`};

  @media (max-width: 768px) {
    text-align: center !important;
    flex-direction: column !important;
  }
`;
