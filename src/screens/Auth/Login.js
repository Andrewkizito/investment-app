//Importing core components
import * as colors from "../../components/constants/colors";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Container from "../../components/core/Container";
import Heading from "../../components/core/Heading";
import { Button, Input } from "native-base";

const Login = () => {
  return (
    <Container style={styles.main}>
      <View style={styles.box}>
        <Image
          source={require("../../../assets/logo-alt.png")}
          style={styles.logo}
        />
        <Heading
          title={"Please sign into your account"}
          style={{ fontSize: 20 }}
        />
        <View>
          <Input placeholder="Username" mt="3" width={"full"} size="md" />
          <Input placeholder="Password" mt="3" width={"full"} size="md" />
        </View>
        <Button width={"full"} mt={10} textAlign={"center"}>
          Login
        </Button>
      </View>
    </Container>
  );
};

export default Login;

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
    marginBottom: 10,
  },
});
