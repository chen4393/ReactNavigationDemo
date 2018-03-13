import React from 'react';
// import RootNavigator from './src/StackNavigator/RootNavigator';
// import RootDrawer from './src/DrawerNavigator/RootDrawer';
// import SimpleApp from './src/BasicApp/SimpleApp';
import SimpleApp from './src/NestingNavigators/SimpleApp';

export default class App extends React.Component {
  render() {
    // console.log(this.props.navigation.state);
    return <SimpleApp />;//<RootDrawer />;
  }
}
