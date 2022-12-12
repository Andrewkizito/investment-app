//Importing core components
import * as colors from "../components/constants/colors";
import { Button } from "native-base";
import { StyleSheet, Image, Dimensions, View, Text } from "react-native";
import Container from "../components/core/Container";
import Heading from "../components/core/Heading";

const Welcome = () => {
  return (
    <Container style={styles.main}>
      <View style={styles.box}>
        <Image
          source={require("../../assets/logo-alt.png")}
          style={styles.logo}
        />
        <View>
          <Heading title={"START INVESTING SMARTLY TODAY"} />
          <Text style={styles.description}>
            Donec commodo mollis est ac interdum. Sed ut velit ac tortor
            vulputate varius. Nunc egestas eros non est tristique porttitor.
          </Text>
        </View>
        <Button color={"primary.400"} width="full" mb={2}>
          Log In
        </Button>
        <Button color={"amber.200"} width="full">
          Register Now
        </Button>
      </View>
    </Container>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.bg_dark,
  },
  box: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  logo: {
    height: 70,
    width: 50,
    marginBottom: 30,
  },
  description: {
    color: "#fff",
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "Avenir-Book",
  },
});
