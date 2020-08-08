import { Theme } from "@react-navigation/native";

const palette = {
  cederChest: '#DB504A',
  midnightGreen: '#084C61',
  saffron: '#E3B505',
  cadet: '#4F6D7A',
  cadetBlue: '#56A3A6',
  dark: '#1A1D22',
  light: '#FFFFFF'
};


const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: palette.cederChest,
    background: palette.light,
    card: palette.cadet,
    text: palette.dark,
    border: palette.light,
    notification: palette.saffron
  }
}

const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: palette.cederChest,
    background: palette.dark,
    text: palette.light,
    card: palette.cadet,
    border: palette.light,
    notification: palette.saffron
  }
}

export { darkTheme, palette };
export default lightTheme;
