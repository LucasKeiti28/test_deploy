import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

// import { Container } from './styles';

import Tokyo from './assets/tokyo.jpeg';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}> Test Deploy App 2020 v2 </Text>
    <Image source={Tokyo} style={styles.image} />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: '92%',
    height: '80%',
  },
});
