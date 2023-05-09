import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

import Apostila_003 from './components/apostila_003'

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_003/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9E9E9E',
    padding: 8,
  },
});

