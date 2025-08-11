import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: "#1D150F",
          fontSize: s(20),
          fontWeight: "semibold",
          marginBottom: vs(6),
        }}
      >
        Meditations
      </Text>
      <Text
        style={{
          fontSize: s(14),
          color: "#2C2016",
          marginBottom: vs(16),
        }}
      >
        Lorem ipsum is simply dummy text
      </Text>
      <TopTabs />
      {/* <MeditationCard /> */}

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(16),
        }}
        renderItem={({ item }) => {
          return (
            <MeditationCard
              image={item.image}
              title={item.title}
              date={item.date}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
