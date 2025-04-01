import { OperationButton } from '../types/OperationButtonsTypes';

export const getOperationButtons = (): OperationButton[] => {
  return [
    { value: 'divide', label: '÷', operation: '/' },
    { value: 'multiply', label: '×', operation: '*' },
    { value: 'subtract', label: '-', operation: '-' },
    { value: 'add', label: '+', operation: '+' },
    { value: 'equals', label: '=', operation: '=' }
  ];
}; 