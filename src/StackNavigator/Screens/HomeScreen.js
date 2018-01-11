import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// class HomeScreen extends React.Component {
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.textStyle}>Home Screen</Text>
//         <Button
//           onPress={() => navigate('Details')}
//           title='Go to Details Screen'
//         />
//       </View>
//     );
//   }
// }

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title='Go to Details Screen'
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

export { HomeScreen };
