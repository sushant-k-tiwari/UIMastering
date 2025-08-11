import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import VideoIcon from "./icon";

const DeviceWidth = Dimensions.get("window").width;
const cardWidth = (DeviceWidth - s(16) * 3) / 2;

interface Props {
  image: string;
  title: string;
  date: string;
}
const MeditationCard = ({ image, title, date }: Props) => {
  return (
    <ImageBackground
      source={{
        uri: image,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveContainer}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>Meditation</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoIcon />
          <Text style={styles.dateText}>31st Jan - 09:00 am</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(130),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },

  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.8,
  },

  cardContent: {
    position: "absolute",
    bottom: s(10),
    left: s(10),
  },

  title: {
    fontSize: s(12),
    fontWeight: "semibold",
    color: "#fff",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  dateText: {
    fontSize: s(12),
    color: "#fff",
    marginStart: s(7),
  },

  liveContainer: {
    position: "absolute",
    top: s(7),
    right: s(10),
    backgroundColor: "#E41111",
    width: s(40),
    height: vs(20),
    borderRadius: s(90),
    justifyContent: "center",
    alignItems: "center",
  },

  liveText: {
    fontSize: s(11),
    fontWeight: "semibold",
    color: "#fff",
    textAlign: "center",
  },
});
