export interface KeyboardLayoutProps {
  onButtonClick: (value: string) => void;
  onClear: () => void;
  onCalculate: () => void;
  onBackspace: () => void;
  onMemoryOperation: (operation: 'MRC' | 'M+' | 'M-') => void;
} 