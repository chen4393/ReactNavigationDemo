import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Profile Screen</Text>
    <Button
      onPress={() => navigation.navigate('DrawerToggle')}
      title="Open Drawer"
    />
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

export { ProfileScreen };
