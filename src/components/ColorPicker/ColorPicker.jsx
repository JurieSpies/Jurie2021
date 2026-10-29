import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLOR_WHITE, COLOR_DARK, COLOR_PRIMARY } from '@/utils/globalColors';
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

    &:hover, &:focus-within {
      .reset-button {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    }
  }
`;

const ColorIconButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  padding: 0;
  color: var(--color-primary);
  font-size: 24px;
  cursor: pointer;
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

  &:focus-visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
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
  const DEFAULT_COLOR = COLOR_PRIMARY;
  const [color, setColor] = useState(() => {
    // Try to get the color from localStorage first
    const savedColor = localStorage.getItem('themeColor');
    return savedColor || DEFAULT_COLOR;
  });

  useEffect(() => {
    // Set the initial color on mount
    document.documentElement.style.setProperty('--color-primary', color);
  }, []);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--color-primary', newColor);
    localStorage.setItem('themeColor', newColor);
    setColor(newColor);
  };

  const handleReset = () => {
    document.documentElement.style.setProperty('--color-primary', DEFAULT_COLOR);
    localStorage.setItem('themeColor', DEFAULT_COLOR);
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
      <ColorIconButton
        type="button"
        title="Customize theme color"
        aria-label="Customize theme color"
        onClick={handleIconClick}
      >
        <IoColorPaletteOutline aria-hidden="true" />
      </ColorIconButton>
      <ColorInput
        ref={colorInputRef}
        type="color"
        tabIndex={-1}
        aria-hidden="true"
        value={color}
        onChange={handleColorChange}
      />
      <ResetButton
        type="button"
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
