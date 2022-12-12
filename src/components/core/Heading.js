//Importing core components
import { StyleSheet, Text } from "react-native";

const Heading = ({ title, style }) => {
  return <Text style={{ ...styles.title, ...style }}>{title}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "600",
    textAlign: "left",
    marginVertical: 10,
    fontFamily: "Avenir-Book",
    textTransform: "capitalize",
  },
});
