
import { StyleSheet, Text, View } from "react-native";
import FoodLogo from "../assets/FoodLogo";
import SunImage from "../assets/SunImage";

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunImage style={styles.SunImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  SunImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
