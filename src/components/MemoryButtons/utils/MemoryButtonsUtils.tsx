import { MemoryButton } from '../types/MemoryButtonsTypes';

export const getMemoryButtons = (): MemoryButton[] => {
  return [
    { value: 'mrc', label: 'MRC', operation: 'MRC' },
    { value: 'm-minus', label: 'M-', operation: 'M-' },
    { value: 'm-plus', label: 'M+', operation: 'M+' }
  ];
}; 