import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const TopTabs = () => {
  const tabsArr = ["Live", "Recorded"];

  const ACTIVE_BG = "#75563B";

  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === tabName && {
                backgroundColor: ACTIVE_BG,
              },
            ]}
            onPress={() => setActiveTab(tabName)}
          >
            <Text
              style={
                activeTab === tabName
                  ? styles.activeText
                  : styles.inactiveText
              }
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    flexDirection: "row",
    height: vs(48),
    padding: s(4),
    alignItems: "center",
  },

  tabButton: {
    borderRadius: s(8),
    height: vs(32),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  activeText: {
    fontSize: s(14),
    fontWeight: "semibold",
    color: "#fff",
  },

  inactiveText: {
    fontSize: s(14),
    color: "#2C2016",
  },

});
