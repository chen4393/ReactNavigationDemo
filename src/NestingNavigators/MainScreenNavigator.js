import { TabNavigator } from 'react-navigation';
import { RecentChatsScreen, AllContactsScreen } from './Screens';

const MainScreenNavigator = TabNavigator({
  Recent: {
    screen: RecentChatsScreen
  },
  All: {
    screen: AllContactsScreen
  },
});

export default MainScreenNavigator;
