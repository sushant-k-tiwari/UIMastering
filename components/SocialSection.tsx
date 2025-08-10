import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import SocialCircle from "./SocialCircle";
import { s, vs } from "react-native-size-matters";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface Props {
  title: string;
  icon: string;
}
const SocialSection = ({ title, icon }: Props) => {
  return (
    <View style={styles.container}>
      {/* <SocialCircle /> */}
      <View style={styles.circle}>
        <FontAwesome5 name={icon} size={s(24)} color="#178AD9" />
      </View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E4E6E8",
    paddingVertical: vs(15),
  },
  text: {
    marginStart: s(14),
    flex: 1,
    fontSize: s(12),
    color: "#8083A3",
  },
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
