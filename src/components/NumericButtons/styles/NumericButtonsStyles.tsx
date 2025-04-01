import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  font-size: 22px;
  border-radius: 7px;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;
  letter-spacing: -1px;
  outline: none;
  position: relative;
  background: linear-gradient(25deg, #525a65, #3b424c);
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  box-shadow: inset 2px -1px 1px 0 rgba(255, 255, 255, 0.2), inset -3px 2px 5px 0 rgba(0, 0, 0, 0.2), 4px 1px 1px 0 rgba(0, 0, 0, 0.5), -1px -3px 1px 0 rgba(0, 0, 0, 0.5), 4px -3px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 5px 0 rgba(0, 0, 0, 0.5);

  &:active {
    box-shadow: inset 2px -1px 1px 0 rgba(255, 255, 255, 0.2), inset -3px 2px 5px 0 rgba(0, 0, 0, 0.2), 3px 1px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 1px 0 rgba(0, 0, 0, 0.5), 3px -1px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 5px 0 rgba(0, 0, 0, 0.5), 4px 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: translate(1px, -1px);
  }
  
  &[data-value="0"] {
    grid-column: span 2;
  }
`; 