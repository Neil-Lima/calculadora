export const calculateExpression = (expression: string): number => {
  try {
    // Note: eval é usado apenas para simplicidade e demonstração
    // Em uma aplicação real, você deve usar uma biblioteca para calcular expressões
    return eval(expression);
  } catch (error) {
    throw new Error('Expressão inválida');
  }
}; 