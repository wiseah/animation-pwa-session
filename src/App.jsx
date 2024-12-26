import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountdownTimer from './components/CountdownTimer';
import Lottie from 'react-lottie';
import animationData from './assets/successAnimation.json';
import BottomAnimation from './components/BottomAnimation';

const AppContainer = styled.div`
 max-width: 430px; // 아이폰 14 pro max 사이즈
 overflow: auto;
 box-shadow: 0px 0px 32px #0000002f;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;
 background-color: #000;
 color: white;
 text-align: center;
 padding: 16px;
`;

const Title = styled.h1`
 font-size: 32px;
 font-weight: bold;
 margin-bottom: 32px;
`;

const Text = styled.div`
  font-size: 28px;
  font-weight: bold; 
  margin-bottom: 16px;
`
const AnimationBackground = styled.div`
 position: absolute;
 width: 100%;
 height: 100%;
 z-index: 0;
 transition: opacity 0.5s ease;
`;

const ContentWrapper = styled.div`
 position: relative;
 z-index: 1;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 4000);
  }, []);

 const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: animationData,
   rendererSettings: {
     preserveAspectRatio: 'xMidYMid slice',
   },
 };

 return (
  <AppContainer>
    {showAnimation && (
      <AnimationBackground>
        <Lottie 
          options={defaultOptions} 
          height="100%" 
          width="100%" 
        />
      </AnimationBackground>
    )}
    <ContentWrapper>
      <Title>🎄Christmas Count ☃️</Title>
      <Text>크리스마스까지</Text>
      <CountdownTimer />
      {/* <Text>남았습니다</Text> */}
      <BottomAnimation />
    </ContentWrapper>
  </AppContainer>
 );
};

export default App;