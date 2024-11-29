import { createGlobalStyle } from 'styled-components';

// Default colors
export const COLOR_PRIMARY = "#03FDA7";
export const COLOR_WHITE = "#FFFFFF";
export const COLOR_BLACK = "#000000";
export const COLOR_GREY = "#808080";
export const COLOR_DISABLED = "#D3D3D3";
export const COLOR_DARK = "#1A1A1A";
export const COLOR_HEADER = "#393B3C";
export const COLOR_BACKGROUND = "#27262F";

// CSS Variables for dynamic color updates
export const GlobalColors = createGlobalStyle`
  :root {
    --color-primary: ${COLOR_PRIMARY};
  }
`;

export default {
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_DISABLED,
  COLOR_DARK,
  COLOR_HEADER,
  COLOR_BACKGROUND,
};
