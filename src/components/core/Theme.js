import { extendTheme } from "native-base";
import { Appearance } from "react-native";

const Theme = extendTheme({
  colors: {
    primary: {
      400: "#1252cd",
    },
  },
  config: {
    initialColorMode: Appearance.getColorScheme(),
  },
  fontConfig: {
    fonts: {
      heading: "Avenir-Book",
      body: "Avenir-Book",
      mono: "Avenir-Book",
    },
  },
});

export default Theme;
