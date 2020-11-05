import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList168121Navigator from '../features/ArticleList168121/navigator';
import ArticleList168120Navigator from '../features/ArticleList168120/navigator';
import ArticleList168119Navigator from '../features/ArticleList168119/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList168121: { screen: ArticleList168121Navigator },
ArticleList168120: { screen: ArticleList168120Navigator },
ArticleList168119: { screen: ArticleList168119Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
