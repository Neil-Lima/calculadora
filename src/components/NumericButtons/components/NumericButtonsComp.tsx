import React from 'react';
import { NumericButtonsProps } from '../types/NumericButtonsTypes';
import { Button } from '../styles/NumericButtonsStyles';
import { getNumericButtons } from '../utils/NumericButtonsUtils';

const NumericButtonsComp: React.FC<NumericButtonsProps> = ({ onButtonClick }) => {
  const numericButtons = getNumericButtons();
  
  return (
    <>
      {numericButtons.map((btn) => (
        <Button 
          key={btn.value} 
          value={btn.value} 
          onClick={() => onButtonClick(btn.value)}
          style={btn.style}
        >
          {btn.label}
        </Button>
      ))}
    </>
  );
};

export default NumericButtonsComp; 