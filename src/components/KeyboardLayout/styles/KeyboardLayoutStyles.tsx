import styled from 'styled-components';
import { ButtonTypeOperation } from '@/components/SpecialButtons/styles/SpecialButtonsStyles';

export const KeyboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, auto);
  gap: 8px;
  
  /* Aplica o estilo para o botão 0 */
  & > button[data-value="0"] {
    grid-column: span 2;
  }
`;

export const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const EqualButton = styled(ButtonTypeOperation)`
  grid-column: 1 / span 4;
  width: 100%;
  height: 30px;
`; 