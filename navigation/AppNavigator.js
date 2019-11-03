import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import InitialQuestions from '../screens/InitialQuestions';
import ContributorAreas from '../screens/ContributorAreas';
import ContributeMoney from '../screens/ContributeMoney';
import ContributeTime from '../screens/ContributeTime';
import ContributeItems from '../screens/ContributeItems';
import CreateProfile from '../screens/CreateProfile';

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Landing: {

      screen: MainTabNavigator,
  
    },
    Goals: {
      screen: InitialQuestions,
    },
    Areas: {
      screen: ContributorAreas,
    },
    Money: {
      screen: ContributeMoney,
    },
    Time: {
      screen: ContributeTime,
    },
    Items: {
      screen: ContributeItems,
    },
    SignUp: {
      screen: CreateProfile
    },



  })
);
