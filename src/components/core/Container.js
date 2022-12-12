//Importing core components
import { StyleSheet, View } from "react-native";

const Container = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    paddingTop: 30,
  },
});
