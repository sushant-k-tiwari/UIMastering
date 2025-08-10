import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import SendIcon from "../assets/SendIcon";

export const SocialCircle = () => {
  return (
    <View style={styles.circle}>
    </View>
  );
};

export default SocialCircle;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  },
});
