import { FC } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import icon from '../assets/favicon.png';
const StoriesComponent: FC = () => {
  return (
    <ScrollView horizontal style={styles.ScrollStyle}>
      <Image source={icon} style={styles.ImageStyle} />
      <Image source={icon} style={styles.ImageStyle} />
      <Image source={icon} style={styles.ImageStyle} />
      <Image source={icon} style={styles.ImageStyle} />
      <Image source={icon} style={styles.ImageStyle} />
      <Image source={icon} style={styles.ImageStyle} />
      <Image source={icon} style={styles.ImageStyle} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  ScrollStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'black',
  },
});

export default StoriesComponent;
