import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLOR_WHITE, COLOR_DARK } from '@/utils/globalColors';
import { IoColorPaletteOutline } from 'react-icons/io5';

const ColorPickerContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    width: fit-content;

    &:hover {
      .reset-button {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    }
  }
`;

const ColorIcon = styled(IoColorPaletteOutline)`
  display: none;
  color: var(--color-primary);
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;

const ColorInput = styled.input`
  -webkit-appearance: none;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: 2px solid ${COLOR_WHITE};
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    display: none;
  }
`;

const ResetButton = styled.button`
  color: ${COLOR_DARK};
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  background: var(--color-primary);
  display: ${props => props.$showReset ? 'block' : 'none'};

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    padding: 4px 8px;
    font-size: 11px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
  }
`;

export const useColorPicker = () => {
  const DEFAULT_COLOR = '#03FDA7';
  const [color, setColor] = useState(DEFAULT_COLOR);

  useEffect(() => {
    const currentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim();
    
    if (currentColor) {
      setColor(currentColor);
    }
  }, []);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--color-primary', newColor);
    setColor(newColor);
  };

  const handleReset = () => {
    document.documentElement.style.setProperty('--color-primary', DEFAULT_COLOR);
    setColor(DEFAULT_COLOR);
  };

  return {
    color,
    DEFAULT_COLOR,
    handleColorChange,
    handleReset
  };
};

const ColorPicker = () => {
  const colorInputRef = useRef(null);
  const { color, DEFAULT_COLOR, handleColorChange, handleReset } = useColorPicker();

  const handleIconClick = () => {
    colorInputRef.current?.click();
  };

  return (
    <ColorPickerContainer>
      <ColorIcon 
        title="Customize Theme Color" 
        onClick={handleIconClick}
      />
      <ColorInput
        ref={colorInputRef}
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <ResetButton 
        className="reset-button" 
        onClick={handleReset}
        $showReset={color !== DEFAULT_COLOR}
      >
        Reset
      </ResetButton>
    </ColorPickerContainer>
  );
};

export default ColorPicker;
