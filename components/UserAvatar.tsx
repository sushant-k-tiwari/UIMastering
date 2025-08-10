import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://resizing.flixster.com/iYBJuxcNM1Kt5-HodRFwq5ysASI=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/67369_v9_bd.jpg",
        }}
        style={styles.avatar}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    height: s(40),
    width: s(40),
    borderRadius: s(20),
  },
});
