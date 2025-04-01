import React from 'react';
import { CalculatorHeaderProps } from '../types/CalculatorHeaderTypes';
import { 
  CalculatorHeaderContainer, 
  CalculadoraHeading, 
  CalculadoraTitle, 
  CalculadoraSubtitle,
  CalculadoraSunBatteryContainer,
  CalculadoraSunBattery
} from '../styles/CalculatorHeaderStyles';
import { getBrandInfo } from '../utils/CalculatorHeaderUtils';

const CalculatorHeaderComp: React.FC<CalculatorHeaderProps> = () => {
  const { title, subtitle } = getBrandInfo();
  
  return (
    <CalculatorHeaderContainer>
      <CalculadoraHeading>
        <CalculadoraTitle>{title}</CalculadoraTitle>
        <CalculadoraSubtitle>{subtitle}</CalculadoraSubtitle>
      </CalculadoraHeading>
      <CalculadoraSunBatteryContainer>
        <CalculadoraSunBattery />
      </CalculadoraSunBatteryContainer>
    </CalculatorHeaderContainer>
  );
};

export default CalculatorHeaderComp; 