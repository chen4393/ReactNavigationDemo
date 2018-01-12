import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from './MainScreenNavigator';
import { ChatScreen } from './Screens';

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
  },
  Chat: { screen: ChatScreen },
});

export default SimpleApp;
