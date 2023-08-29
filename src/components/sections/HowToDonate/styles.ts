import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const DonateCardSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 50px;

  position: relative;
`;
// export const CardStepImg = styled.div`
//   width: 300px;
//   height: 230px;
//   background-color: #c2d7ea;
//   border-radius: 10px 10px 0px 0px;

//   padding: 20px;
// `;
export const CardStepImg = styled.img`
  width: 300px;
  height: 230px;
  border-radius: 10px 10px 0px 0px;

  padding: 20px;
`;
export const CardStepText = styled.div`
  width: 300px;
  background-color: ${colors.white_transparent_20};
  border-radius: 0px 0px 10px 10px;

  padding: 20px;
`;
export const BoxRoundedNumberSC = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${colors.four_color_yellow_E1FF26};
  border-radius: 50%;
  background-color: ${colors.white_transparent_10};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -8%;
  left: -1%;
`;
