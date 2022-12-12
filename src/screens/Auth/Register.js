//Importing core components
import * as colors from "../../components/constants/colors";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Container from "../../components/core/Container";
import Heading from "../../components/core/Heading";
import { Button, Input } from "native-base";

const Register = () => {
  return (
    <Container style={styles.main}>
      <View style={styles.box}>
        <Image
          source={require("../../../assets/logo-alt.png")}
          style={styles.logo}
        />
        <Heading title={"Start your journey today."} style={{ fontSize: 20 }} />
        <View>
          <Input
            placeholder="Username"
            mt="3"
            width={"full"}
            size="md"
            color={"white"}
            type="text"
          />
          <Input
            placeholder="Email"
            mt="3"
            width={"full"}
            size="md"
            color={"white"}
            type="text"
          />
          <Input
            placeholder="Password"
            mt="3"
            width={"full"}
            size="md"
            color={"white"}
            type="password"
          />
          <Input
            placeholder="Confirm Password"
            mt="3"
            width={"full"}
            size="md"
            color={"white"}
            type="password"
          />
        </View>
        <Button
          width={"full"}
          colorScheme="success"
          mt={10}
          textAlign={"center"}
        >
          Register
        </Button>
      </View>
    </Container>
  );
};

export default Register;

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
