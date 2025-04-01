import React from 'react';
import { DisplayProps } from '../types/DisplayTypes';
import { DisplayContainer, DisplayScreen, DisplayScreenMem } from '../styles/DisplayStyles';
import { formatDisplayValue } from '../utils/DisplayUtils';

const DisplayComp: React.FC<DisplayProps> = ({ value, memory }) => {
  const formattedValue = formatDisplayValue(value);
  
  return (
    <DisplayContainer>
      <DisplayScreenMem style={{ visibility: memory ? 'visible' : 'hidden' }}>M</DisplayScreenMem>
      <DisplayScreen type="text" name="screen" value={formattedValue} maxLength={10} disabled />
    </DisplayContainer>
  );
};

export default DisplayComp; 