export interface NumericButtonsProps {
  onButtonClick: (value: string) => void;
}

export interface NumericButton {
  value: string;
  label: string;
  style?: React.CSSProperties;
} 