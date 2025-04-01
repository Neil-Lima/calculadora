import React, { useState } from 'react';
import { CalculadoraProps } from '../types/CalculadoraTypes';
import { CalculadoraWrapper } from '../styles/CalculadoraStyles';
import CalculatorHeader from '@/components/CalculatorHeader';
import Display from '@/components/Display';
import KeyboardLayout from '@/components/KeyboardLayout';
import { calculateExpression } from '../utils/CalculadoraUtils';

const CalculadoraComp: React.FC<CalculadoraProps> = () => {
  const [input, setInput] = useState('0');
  const [memory, setMemory] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    if (input === '0' && value !== '.') {
      setInput(value);
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = calculateExpression(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  const clearInputValue = () => {
    setInput('0');
  };

  const handleBackspace = () => {
    setInput(prevInput => prevInput.length > 1 ? prevInput.slice(0, -1) : '0');
  };

  const handleMemoryOperation = (operation: 'MRC' | 'M+' | 'M-') => {
    switch (operation) {
      case 'MRC':
        if (memory !== null) {
          setInput(memory.toString());
          setMemory(null);
        }
        break;
      case 'M+':
        try {
          const current = parseFloat(input);
          setMemory((memory || 0) + current);
        } catch (e) {
          // Handle error
        }
        break;
      case 'M-':
        try {
          const current = parseFloat(input);
          setMemory((memory || 0) - current);
        } catch (e) {
          // Handle error
        }
        break;
    }
  };

  return (
    <CalculadoraWrapper>
      <CalculatorHeader />
      <Display value={input} memory={memory !== null} />
      <KeyboardLayout 
        onButtonClick={handleButtonClick}
        onClear={clearInputValue}
        onCalculate={calculateResult}
        onBackspace={handleBackspace}
        onMemoryOperation={handleMemoryOperation}
      />
    </CalculadoraWrapper>
  );
};

export default CalculadoraComp; 