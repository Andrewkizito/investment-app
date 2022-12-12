import { extendTheme } from "native-base";

const Theme = extendTheme({
  colors: {
    primary: {
      400: "#1252cd",
    },
  },
  config: {
    initialColorMode: "dark",
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
