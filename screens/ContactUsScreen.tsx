import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";


const ContactUsScreen = () => {
  return (
    <View
      style={{
        marginTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection title="WhatsApp" icon="whatsapp"/>
        <SocialSection title="X" icon="twitter"/>
        <SocialSection title="Instagram" icon="instagram"/>
        <SocialSection title="Telegram" icon="telegram"/>
        <SocialSection title="Linkedin" icon="linkedin"/>
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialSection: {
    borderRadius: s(14),
    backgroundColor: "#F5F5FA",
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(16),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: vs(16),
    marginStart: s(16),
  },
});
