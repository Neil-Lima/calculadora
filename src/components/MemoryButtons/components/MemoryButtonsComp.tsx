import React from 'react';
import { MemoryButtonsProps } from '../types/MemoryButtonsTypes';
import { ButtonTypeMemory } from '../styles/MemoryButtonsStyles';
import { getMemoryButtons } from '../utils/MemoryButtonsUtils';

const MemoryButtonsComp: React.FC<MemoryButtonsProps> = ({ onMemoryOperation }) => {
  const memoryButtons = getMemoryButtons();
  
  return (
    <>
      {memoryButtons.map((btn) => (
        <ButtonTypeMemory 
          key={btn.value} 
          value={btn.value} 
          onClick={() => onMemoryOperation(btn.operation)}
        >
          {btn.label}
        </ButtonTypeMemory>
      ))}
    </>
  );
};

export default MemoryButtonsComp; 