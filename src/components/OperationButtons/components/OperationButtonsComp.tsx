import React from 'react';
import { OperationButtonsProps } from '../types/OperationButtonsTypes';
import { ButtonTypeOperation } from '../styles/OperationButtonsStyles';
import { getOperationButtons } from '../utils/OperationButtonsUtils';

const OperationButtonsComp: React.FC<OperationButtonsProps> = ({ 
  onButtonClick,
  onCalculate
}) => {
  const operationButtons = getOperationButtons();
  
  const handleOperationClick = (operation: string) => {
    if (operation === '=') {
      onCalculate();
    } else {
      onButtonClick(operation);
    }
  };
  
  return (
    <>
      {operationButtons.map((btn) => (
        <ButtonTypeOperation 
          key={btn.value} 
          value={btn.value} 
          onClick={() => handleOperationClick(btn.operation)}
        >
          {btn.label}
        </ButtonTypeOperation>
      ))}
    </>
  );
};

export default OperationButtonsComp; 