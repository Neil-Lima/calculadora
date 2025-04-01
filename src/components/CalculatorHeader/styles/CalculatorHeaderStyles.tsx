import styled from 'styled-components';

export const CalculatorHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalculadoraHeading = styled.div`
  font-family: 'Slabo 27px', serif;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
`;

export const CalculadoraTitle = styled.h1`
  margin: 0 0 -4px;
  font-size: 25px;
`;

export const CalculadoraSubtitle = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const CalculadoraSunBatteryContainer = styled.div`
  border-radius: 3px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CalculadoraSunBattery = styled.div`
  width: 107px;
  height: 30px;
  border-radius: 3px;
  background-color: #3d2115;
  box-shadow: 0 -3px 5px -3px rgba(255, 255, 255, 0.2), 5px 0 3px -5px rgba(255, 255, 255, 0.8), 0 2px 5px -2px rgba(0, 0, 0, 0.5), -3px 0 3px -1px rgba(0, 0, 0, 0.8), inset 0 -5px 3px -3px rgba(0, 0, 0, 0.5), inset 5px 0 5px -2px rgba(0, 0, 0, 0.8);
  background-image: repeating-linear-gradient(to right, transparent, transparent 26px, rgba(255, 255, 255, 0.1) 26px, rgba(255, 255, 255, 0.1) 27px);
`; 