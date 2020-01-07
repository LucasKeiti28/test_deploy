import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import OneSignal from 'react-native-onesignal';

// import { Container } from './styles';

import Tokyo from './assets/tokyo.jpeg';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('574588dd-ac60-4461-bfda-a7f5d10d9478');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Test Deploy App 2020 v2 </Text>
        <Image source={Tokyo} style={styles.image} />
      </View>
    );
  }
}

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
