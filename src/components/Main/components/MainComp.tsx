import React from 'react';
import Calculadora from '@/components/Calculadora';
import { MainContainer } from '../styles/MainStyles';
import { MainProps } from '../types/MainTypes';

const MainComp: React.FC<MainProps> = () => {
  return (
    <MainContainer>
      <Calculadora />
    </MainContainer>
  );
};

export default MainComp; 