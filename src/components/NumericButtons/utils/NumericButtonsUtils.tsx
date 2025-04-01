import { NumericButton } from '../types/NumericButtonsTypes';

export const getNumericButtons = (): NumericButton[] => {
  return [
    // Primeira linha: 789
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    
    // Segunda linha: 456
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    
    // Terceira linha: 123
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    
    // Quarta linha: 0 e .
    { value: '0', label: '0', style: { gridColumn: 'span 2' } },
    { value: '.', label: '.' }
  ];
}; 