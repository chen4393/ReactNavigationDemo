import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class AllContactsScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state);
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>List of all contacts</Text>
        <Button
          onPress={
            () => {
              this.props.navigation.navigate('Chat', { user: 'Jane' });
              // this.props.navigation.goBack();
            }
          }
          title="Chat with Jane"
        />
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

export { AllContactsScreen };
