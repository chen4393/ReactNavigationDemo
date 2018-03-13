import React from 'react';
import { View, Text, Button } from 'react-native';

class ChatScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: `Chat with ${navigation.state.params.user}`,
  //   headerRight: <Button title="info" />
  // });
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const isInfo = state.params.mode === 'info';
    const { user } = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => {
            setParams({ mode: isInfo ? 'none' : 'info' });
            navigation.pop();
          }}
        />
      ),
    };
  };
  render() {
    console.log(this.props.navigation.state);
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

export { ChatScreen };
