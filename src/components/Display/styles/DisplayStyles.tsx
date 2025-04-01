import styled from 'styled-components';

export const DisplayContainer = styled.div`
  position: relative;
  margin: 12px 0;
  border-radius: 5px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const DisplayScreenMem = styled.p`
  font-family: 'Share Tech Mono', monospace;
  position: absolute;
  top: 0;
  left: 10px;
  color: #000;
  font-size: 16px;
  line-height: 14px;
`;

export const DisplayScreen = styled.input`
  background-image: linear-gradient(-155deg, #44443a 0%, #656f66 100%);
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: 0;
  text-align: right;
  font-size: 32px;
  padding: 8px;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: -2px;
  border-radius: 5px;
  box-shadow: 0 -4px 4px -3px rgba(255, 255, 255, 0.3), 5px 0 3px -5px rgba(255, 255, 255, 0.8), 0 5px 5px -3px rgba(0, 0, 0, 0.5), -3px 0 3px -1px rgba(0, 0, 0, 0.8), inset 0 -5px 3px -4px rgba(0, 0, 0, 0.5), inset 5px 0 5px -2px rgba(0, 0, 0, 0.8);

  &:disabled {
    color: #000;
  }
`; 