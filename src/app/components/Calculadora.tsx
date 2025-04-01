import React, { useState } from 'react';
import {
  CalculadoraWrapper,
  CalculadoraTop,
  CalculadoraHeading,
  CalculadoraTitle,
  CalculadoraSubtitle,
  CalculadoraSunBatteryContainer,
  CalculadoraSunBattery,
  CalculadoraScreenContainer,
  CalculadoraScreenMem,
  CalculadoraScreen,
  CalculadoraKeyboard,
  ButtonTypeReset,
  ButtonTypeMemory,
  ButtonTypeAdvanced,
  ButtonTypeOperation,
  SquareSymbol,
  BackspaceSymbol,
  Button
} from '../styles/CalculadoraStyle';

const Calculadora: React.FC = () => {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value: string) => {
    if (input === '0' && value !== '.') {
      setInput(value);
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  const clearInputValue = () => {
    setInput('0');
  };

  const handleBackspace = () => {
    setInput(prevInput => prevInput.slice(0, -1));
  };

  return (
    <CalculadoraWrapper>
      <CalculadoraTop>
        <CalculadoraHeading>
          <CalculadoraTitle>Victor</CalculadoraTitle>
          <CalculadoraSubtitle>Neil</CalculadoraSubtitle>
        </CalculadoraHeading>
        <CalculadoraSunBatteryContainer>
          <CalculadoraSunBattery />
        </CalculadoraSunBatteryContainer>
      </CalculadoraTop>

      <CalculadoraScreenContainer>
        <CalculadoraScreenMem>M</CalculadoraScreenMem>
        <CalculadoraScreen type="text" name="screen" value={input} maxLength={10} disabled />
      </CalculadoraScreenContainer>

      <CalculadoraKeyboard>
        {/* Primeira linha */}
        <ButtonTypeReset onClick={clearInputValue}>C</ButtonTypeReset>
        <ButtonTypeAdvanced>+/-</ButtonTypeAdvanced>
        <ButtonTypeAdvanced>%</ButtonTypeAdvanced>
        <ButtonTypeOperation value="BACKSPACE" onClick={handleBackspace}>
          <BackspaceSymbol viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l-9 9 9 9M3 11h24" stroke="#fff" strokeWidth="3" />
          </BackspaceSymbol>
        </ButtonTypeOperation>
<<<<<<< Updated upstream
        
        {/* Segunda linha */}
=======
>>>>>>> Stashed changes
        <ButtonTypeMemory>MRC</ButtonTypeMemory>
        <ButtonTypeMemory>M-</ButtonTypeMemory>
        <ButtonTypeMemory>M+</ButtonTypeMemory>
        <Button value="7" onClick={() => handleButtonClick('7')}>7</Button>
        
        {/* Terceira linha */}
        <Button value="8" onClick={() => handleButtonClick('8')}>8</Button>
        <Button value="9" onClick={() => handleButtonClick('9')}>9</Button>
        <Button value="4" onClick={() => handleButtonClick('4')}>4</Button>
        <Button value="5" onClick={() => handleButtonClick('5')}>5</Button>
        
        {/* Quarta linha */}
        <Button value="6" onClick={() => handleButtonClick('6')}>6</Button>
        <Button value="1" onClick={() => handleButtonClick('1')}>1</Button>
        <Button value="2" onClick={() => handleButtonClick('2')}>2</Button>
        <Button value="3" onClick={() => handleButtonClick('3')}>3</Button>
<<<<<<< Updated upstream
        
        {/* Quinta linha */}
        <Button value="0" onClick={() => handleButtonClick('0')}>0</Button>
        <Button value="." onClick={() => handleButtonClick('.')}>.</Button>
        <ButtonTypeOperation onClick={() => handleButtonClick('/')}>÷</ButtonTypeOperation>
        
        {/* Sexta linha */}
        <ButtonTypeOperation onClick={() => handleButtonClick('*')}>×</ButtonTypeOperation>
        <ButtonTypeOperation onClick={() => handleButtonClick('-')}>-</ButtonTypeOperation>
        <ButtonTypeOperation onClick={() => handleButtonClick('+')}>+</ButtonTypeOperation>
        
        {/* Sétima linha */}
=======
        <Button value="0" onClick={() => handleButtonClick('0')}>0</Button>
        <Button value="." onClick={() => handleButtonClick('.')}>.</Button>
        <ButtonTypeOperation onClick={() => handleButtonClick('/')}>÷</ButtonTypeOperation>
        <ButtonTypeOperation onClick={() => handleButtonClick('*')}>×</ButtonTypeOperation>
        <ButtonTypeOperation onClick={() => handleButtonClick('-')}>-</ButtonTypeOperation>
        <ButtonTypeOperation onClick={() => handleButtonClick('+')}>+</ButtonTypeOperation>
>>>>>>> Stashed changes
        <ButtonTypeOperation onClick={calculateResult}>=</ButtonTypeOperation>
      </CalculadoraKeyboard>
    </CalculadoraWrapper>
  );
};

export default Calculadora;
