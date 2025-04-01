export enum CalculadoraActionTypes {
  SET_INPUT = 'SET_INPUT',
  CLEAR_INPUT = 'CLEAR_INPUT',
  CALCULATE_RESULT = 'CALCULATE_RESULT',
  SET_MEMORY = 'SET_MEMORY',
  CLEAR_MEMORY = 'CLEAR_MEMORY',
}

export interface CalculadoraState {
  input: string;
  memory: number | null;
} 