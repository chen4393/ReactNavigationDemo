import { StackNavigator } from 'react-navigation';
import { HomeScreen, DetailsScreen } from './Screens';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'HomePage'
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details'
    },
  },
});

export default RootNavigator;
