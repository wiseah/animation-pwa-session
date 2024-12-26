import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import bottomAnimation from '../assets/AnimationBottom.json'

const AnimationWrapper = styled.div`
  width: 300px;
`;

const ChristmasAnimation = () => {
  return (
    <AnimationWrapper>
      <Lottie animationData={bottomAnimation} loop={true} />
    </AnimationWrapper>
  );
};

export default ChristmasAnimation;
