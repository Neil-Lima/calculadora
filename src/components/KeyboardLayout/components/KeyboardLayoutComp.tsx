import React from 'react';
import { KeyboardLayoutProps } from '../types/KeyboardLayoutTypes';
import { KeyboardContainer, EqualButton } from '../styles/KeyboardLayoutStyles';
import { Button } from '@/components/NumericButtons/styles/NumericButtonsStyles';
import { ButtonTypeOperation, BackspaceSymbol } from '@/components/SpecialButtons/styles/SpecialButtonsStyles';
import { ButtonTypeMemory } from '@/components/MemoryButtons/styles/MemoryButtonsStyles';
import { ButtonTypeReset, ButtonTypeAdvanced } from '@/components/SpecialButtons/styles/SpecialButtonsStyles';

const KeyboardLayoutComp: React.FC<KeyboardLayoutProps> = ({
  onButtonClick,
  onClear,
  onCalculate,
  onBackspace,
  onMemoryOperation
}) => {
  return (
    <KeyboardContainer>
      {/* Linha 1 */}
      <ButtonTypeReset onClick={onClear}>C</ButtonTypeReset>
      <ButtonTypeAdvanced>+/-</ButtonTypeAdvanced>
      <ButtonTypeAdvanced>%</ButtonTypeAdvanced>
      <ButtonTypeOperation value="BACKSPACE" onClick={onBackspace}>
        <BackspaceSymbol viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l-9 9 9 9M3 11h24" stroke="#fff" strokeWidth="3" />
        </BackspaceSymbol>
      </ButtonTypeOperation>
      
      {/* Linha 2 */}
      <ButtonTypeMemory onClick={() => onMemoryOperation('MRC')}>MRC</ButtonTypeMemory>
      <ButtonTypeMemory onClick={() => onMemoryOperation('M-')}>M-</ButtonTypeMemory>
      <ButtonTypeMemory onClick={() => onMemoryOperation('M+')}>M+</ButtonTypeMemory>
      <Button onClick={() => onButtonClick('7')}>7</Button>
      
      {/* Linha 3 */}
      <Button onClick={() => onButtonClick('8')}>8</Button>
      <Button onClick={() => onButtonClick('9')}>9</Button>
      <Button onClick={() => onButtonClick('4')}>4</Button>
      <Button onClick={() => onButtonClick('5')}>5</Button>
      
      {/* Linha 4 */}
      <Button onClick={() => onButtonClick('6')}>6</Button>
      <Button onClick={() => onButtonClick('1')}>1</Button>
      <Button onClick={() => onButtonClick('2')}>2</Button>
      <Button onClick={() => onButtonClick('3')}>3</Button>
      
      {/* Linha 5 */}
      <Button data-value="0" onClick={() => onButtonClick('0')}>0</Button>
      <Button onClick={() => onButtonClick('.')}>.</Button>
      <ButtonTypeOperation onClick={() => onButtonClick('/')}>÷</ButtonTypeOperation>
      
      {/* Linha 6 */}
      <ButtonTypeOperation onClick={() => onButtonClick('*')}>×</ButtonTypeOperation>
      <ButtonTypeOperation onClick={() => onButtonClick('-')}>-</ButtonTypeOperation>
      <ButtonTypeOperation onClick={() => onButtonClick('+')}>+</ButtonTypeOperation>
      
      {/* Linha 7 - Botão de igual centralizado */}
      <EqualButton onClick={onCalculate}>=</EqualButton>
    </KeyboardContainer>
  );
};

export default KeyboardLayoutComp; 