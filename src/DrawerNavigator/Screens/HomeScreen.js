import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});

export { HomeScreen };
