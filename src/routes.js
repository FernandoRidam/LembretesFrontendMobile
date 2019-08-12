import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import Main from './pages/Main';
import New from './pages/New';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    New,
  }),
);