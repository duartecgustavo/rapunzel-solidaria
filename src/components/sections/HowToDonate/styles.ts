import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const DonateCardSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  align-items: center;
`;

export const CardStepImg = styled.img`
  position: relative;
  width: 300px;
  height: 230px;
`;
export const CardStepText = styled.div`
  width: 290px;
  background-color: ${colors.white_transparent_70};
  border-radius: 10px;
  height: 130px;
  padding: 20px;
  position: relative;
  overflow-y: auto;
`;

export const BoxRoundedNumberSC = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${colors.four_color_yellow_E1FF26};
  border-radius: 50%;
  background-color: ${colors.black_transparent_25};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  top: -13%;
  left: -8%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: -9%;
    left: -5%;
    border: 3px solid ${colors.four_color_yellow_E1FF26};
  }
`;
