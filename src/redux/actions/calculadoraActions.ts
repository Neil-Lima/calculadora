import { createAction } from '@reduxjs/toolkit';
import { CalculadoraActionTypes } from '../types/calculadoraActionTypes';

export const setInput = createAction<string>(CalculadoraActionTypes.SET_INPUT);
export const clearInput = createAction(CalculadoraActionTypes.CLEAR_INPUT);
export const calculateResult = createAction(CalculadoraActionTypes.CALCULATE_RESULT);
export const setMemory = createAction<number>(CalculadoraActionTypes.SET_MEMORY);
export const clearMemory = createAction(CalculadoraActionTypes.CLEAR_MEMORY); 