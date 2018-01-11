import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Details Screen</Text>
      </View>
    );
  }
}

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

export { DetailsScreen };
