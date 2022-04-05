import { FC } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import icon from '../assets/favicon.png';
const StoriesComponent: FC = () => {
  return (
    <ScrollView horizontal style={{ 
        paddingTop: 5, 
        paddingBottom: 5, 
        backgroundColor: 'black' 
    }}>
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
      <Image source={icon} style={{height: 50, width: 50, borderRadius: 50, marginRight: 20}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default StoriesComponent;
