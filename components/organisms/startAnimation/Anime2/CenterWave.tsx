import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import RedWave from "../../../../public/svgs/startanimation/red-wave.svg";

const WaveWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
  > svg {
    transform: scale(5, 2);
    transform-origin: right;
  }
`;

const waveTranslate = keyframes`
    0% {
        transform: scale(5,2) translateX(41.666%);
    }

    100% {
        transform: scale(5,2) translateX(8.333%);
    }
`;

const centerCircleAnimation = keyframes`
    0% {
        transform: translateY(34px);
    }

    100% {
        transform: translateY(-34px);
    }
`;

const WaveAnimater = styled.div`
  position: absolute;
  top: 50%;
  right: calc(50% + 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  > svg {
    transform-origin: right;
    animation: ${waveTranslate} 750ms linear 200ms both infinite;
  }

  ::after {
    position: absolute;
    top: -50vh;
    left: 100%;
    content: "";
    width: 70vw;
    height: 150vh;
    background-color: ${ANGE_WHITE};
  }
`;

const CenterCircle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  animation: ${centerCircleAnimation} 375ms ease-in-out 200ms both alternate
    infinite;
`;

const CenterWave: React.VFC = () => {
  return (
    <WaveWrapper>
      <WaveAnimater>
        <RedWave />
      </WaveAnimater>
      <CenterCircle />
    </WaveWrapper>
  );
};

export default CenterWave;
