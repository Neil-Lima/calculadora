export const formatDisplayValue = (value: string): string => {
  // Limita o tamanho do valor exibido para evitar overflow
  if (value.length > 10) {
    return value.slice(0, 10);
  }
  return value;
}; 