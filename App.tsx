import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "./global.css";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
