import { configureStore } from '@reduxjs/toolkit';
import calculadoraReducer from './reducers/calculadoraReducer';

export const store = configureStore({
  reducer: {
    calculadora: calculadoraReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 