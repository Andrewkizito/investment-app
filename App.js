//Importing helper functions
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";

//Importing core components
import { Main } from "./src/router/Main";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import Theme from "./src/components/core/Theme";

SplashScreen.preventAutoHideAsync();

Amplify.configure(config);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Avenir-Book": require("./assets/Avenir-Book.ttf"),
  });

  useEffect(() => {
    const close = async () => await SplashScreen.hideAsync();
    if (fontsLoaded) {
      close();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar style="light" />
      <Main />
    </NativeBaseProvider>
  );
}
