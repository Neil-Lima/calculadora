export interface MemoryButtonsProps {
  onMemoryOperation: (operation: 'MRC' | 'M+' | 'M-') => void;
}

export interface MemoryButton {
  value: string;
  label: string;
  operation: 'MRC' | 'M+' | 'M-';
} 