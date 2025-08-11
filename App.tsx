import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "./global.css";
import HomeScreen from "./screens/HomeScreen";
import PaymentScreen from "./screens/PaymentScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PaymentScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
