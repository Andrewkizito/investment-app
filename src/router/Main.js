//Importing helper functions
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as colors from "../components/constants/colors";

//Importing screens
import Welcome from "../screens/Welcome";
import Login from "../screens/Auth/Login";

const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.bg_dark,
            },
            headerTintColor: "#fff"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
