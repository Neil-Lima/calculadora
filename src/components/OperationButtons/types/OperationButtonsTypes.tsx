export interface OperationButtonsProps {
  onButtonClick: (value: string) => void;
  onCalculate: () => void;
}

export interface OperationButton {
  value: string;
  label: React.ReactNode;
  operation: string;
} 