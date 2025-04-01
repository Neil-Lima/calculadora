import React from 'react';
import { SpecialButtonsProps } from '../types/SpecialButtonsTypes';
import { 
  ButtonTypeReset, 
  ButtonTypeAdvanced, 
  ButtonTypeOperation,
  SquareSymbol,
  BackspaceSymbol
} from '../styles/SpecialButtonsStyles';
import { getSpecialButtons } from '../utils/SpecialButtonsUtils';

const SpecialButtonsComp: React.FC<SpecialButtonsProps> = ({ onClear, onBackspace }) => {
  return (
    <>
      <ButtonTypeReset onClick={onClear}>C</ButtonTypeReset>
      <ButtonTypeAdvanced>+/-</ButtonTypeAdvanced>
      <ButtonTypeAdvanced>%</ButtonTypeAdvanced>
      <ButtonTypeOperation value="BACKSPACE" onClick={onBackspace}>
        <BackspaceSymbol viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l-9 9 9 9M3 11h24" stroke="#fff" strokeWidth="3" />
        </BackspaceSymbol>
      </ButtonTypeOperation>
    </>
  );
};

export default SpecialButtonsComp; 