import styled from 'styled-components';

export const CalculadoraWrapper = styled.div`
  width: 250px;
  min-width: 250px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 15px 20px;
  background: radial-gradient(ellipse farthest-corner at 20% 65%, #525864, #130f0e);
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Overpass Mono', monospace;
  border-top-left-radius: 100% 30px;
  border-top-right-radius: 100% 30px;
  border-bottom-left-radius: 100% 60px;
  border-bottom-right-radius: 100% 60px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7), 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 0 25px 0 rgba(0, 0, 0, 0.3), 10px 0 4px 10px rgba(0, 0, 0, 0.3), inset 0 0 3px 0 rgba(0, 0, 0, 0.7), inset 0 0 10px 0 rgba(0, 0, 0, 0.5), inset 0 -25px 5px 0 rgba(0, 0, 0, 0.2), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.3);
`;

export const CalculadoraTop = styled.div`
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
  font-size: 20px;
`;

export const CalculadoraSubtitle = styled.h2`
  margin: 0;
  font-size: 14px;
`;

export const CalculadoraSunBatteryContainer = styled.div`
  border-radius: 3px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CalculadoraSunBattery = styled.div`
  width: 80px;
  height: 20px;
  border-radius: 3px;
  background-color: #3d2115;
  box-shadow: 0 -3px 5px -3px rgba(255, 255, 255, 0.2), 5px 0 3px -5px rgba(255, 255, 255, 0.8), 0 2px 5px -2px rgba(0, 0, 0, 0.5), -3px 0 3px -1px rgba(0, 0, 0, 0.8), inset 0 -5px 3px -3px rgba(0, 0, 0, 0.5), inset 5px 0 5px -2px rgba(0, 0, 0, 0.8);
  background-image: repeating-linear-gradient(to right, transparent, transparent 26px, rgba(255, 255, 255, 0.1) 26px, rgba(255, 255, 255, 0.1) 27px);
`;

export const CalculadoraScreenContainer = styled.div`
  position: relative;
  margin: 12px 0;
  border-radius: 5px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CalculadoraScreenMem = styled.p`
  font-family: 'Share Tech Mono', monospace;
  position: absolute;
  top: 0;
  left: 12px;
  color: #000;
  font-size: 14px;
  line-height: 14px;
  visibility: hidden;
`;

export const CalculadoraScreen = styled.input`
  background-image: linear-gradient(-155deg, #44443a 0%, #656f66 100%);
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: 0;
  text-align: right;
  font-size: 24px;
  padding: 8px;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: -2px;
  border-radius: 5px;
  box-shadow: 0 -4px 4px -3px rgba(255, 255, 255, 0.3), 5px 0 3px -5px rgba(255, 255, 255, 0.8), 0 5px 5px -3px rgba(0, 0, 0, 0.5), -3px 0 3px -1px rgba(0, 0, 0, 0.8), inset 0 -5px 3px -4px rgba(0, 0, 0, 0.5), inset 5px 0 5px -2px rgba(0, 0, 0, 0.8);

  &:disabled {
    color: #000;
  }
`;

export const CalculadoraKeyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 22px) repeat(5, 25px);
  gap: 5px;
  
  /* Estilo para botão 0 ocupar duas colunas */
  & > button[value="0"] {
    grid-column: span 2;
  }
  
  /* Estilo para o botão de igual (o último botão) ocupar toda a largura */
  & > button:last-child {
    grid-column: span 4;
    height: 25px;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 18px;
  border-radius: 5px;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  letter-spacing: -1px;
  outline: none;
  position: relative;
  background: linear-gradient(25deg, #525a65, #3b424c);
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  box-shadow: inset 2px -1px 1px 0 rgba(255, 255, 255, 0.2), inset -3px 2px 5px 0 rgba(0, 0, 0, 0.2), 2px 1px 1px 0 rgba(0, 0, 0, 0.5), -1px -2px 1px 0 rgba(0, 0, 0, 0.5), 2px -2px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 3px 0 rgba(0, 0, 0, 0.5);

  &:active {
    box-shadow: inset 2px -1px 1px 0 rgba(255, 255, 255, 0.2), inset -3px 2px 5px 0 rgba(0, 0, 0, 0.2), 1px 1px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 1px 0 rgba(0, 0, 0, 0.5), 1px -1px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 3px 0 rgba(0, 0, 0, 0.5), 2px 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: translate(1px, -1px);
  }
  
  &[value="NEGATE"] {
    font-size: 14px;
  }

  &[value="SQUARE"],
  &[value="BACKSPACE"] {
    padding: 0;
  }
`;

export const SquareSymbol = styled.svg`
  width: 20px;
  height: 15px;
`;

export const ButtonTypeOperation = styled(Button)`
  font-size: 18px;
`;

export const ButtonTypeMemory = styled(Button)`
  font-size: 14px;
`;

export const ButtonTypeAdvanced = styled(Button)`
  font-size: 14px;
`;

export const ButtonTypeReset = styled(Button)`
  background: linear-gradient(25deg, #9cc9dc, #68a4c0);
`;

export const BackspaceSymbol = styled.svg`
  width: 15px;
  height: 12px;
`;
