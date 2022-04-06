import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import NavBarComponent from './Components/NavBarComponent';
import FooterComponent from './Components/FooterComponent';
import PostComponent from './Components/PostComponent';
import { useEffect } from 'react';

export default function App() {
  useEffect( () => {
    console.log(Platform)
    console.log(Dimensions.get('screen'))
  }, [])

  return (
    <View style={styles.container}>
      <NavBarComponent />
      <PostComponent />
      <FooterComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
