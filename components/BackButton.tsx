import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={s(24)} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: s(40),
    width: s(40),
    borderRadius: s(20),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});
