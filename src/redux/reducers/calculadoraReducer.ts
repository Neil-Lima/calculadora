import { createReducer } from '@reduxjs/toolkit';
import { CalculadoraState } from '../types/calculadoraActionTypes';
import { 
  setInput, 
  clearInput, 
  calculateResult, 
  setMemory, 
  clearMemory 
} from '../actions/calculadoraActions';

const initialState: CalculadoraState = {
  input: '0',
  memory: null,
};

const calculadoraReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInput, (state, action) => {
      state.input = action.payload;
    })
    .addCase(clearInput, (state) => {
      state.input = '0';
    })
    .addCase(calculateResult, (state) => {
      try {
        state.input = eval(state.input).toString();
      } catch (e) {
        state.input = 'Erro';
      }
    })
    .addCase(setMemory, (state, action) => {
      state.memory = action.payload;
    })
    .addCase(clearMemory, (state) => {
      state.memory = null;
    });
});

export default calculadoraReducer; 