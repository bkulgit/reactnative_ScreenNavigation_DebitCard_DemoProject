import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen for tab view

import Homepage from '../HomePage/Homepage';
import PaymentHistoryView from '../PaymentHistory/PaymentHistoryView';
import CreditDetailsView from '../CreditDetails/CreditDetailsView';
import UserProfileView from '../UserProfileView/UserProfileView';
import {screenOptions} from '../../Utils/Utils';
import DebitCardlimitSetScreen from '../DebitCardDetailsScreen/DebitCardLimitSetScreen';
import DebitCardDetailsScreen from '../DebitCardDetailsScreen/DebitCardDetailsInfo';

const TabView = createBottomTabNavigator();
const HompeScreenStack = createNativeStackNavigator();

const DebitCardViewPage = () => {
  return (
    <TabView.Navigator
      initialRouteName="DebitCard"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        headerShown: false,
        tabBarActiveTintColor: '#2deb4f',
      })}>
      <TabView.Screen name="Home" component={Homepage} />
      <TabView.Screen name="DebitCard" component={DebitCardDetailsScreen} />
      <TabView.Screen name="pamenthistory" component={PaymentHistoryView} />
      <TabView.Screen name="creditsDetails" component={CreditDetailsView} />
      <TabView.Screen name="Profile" component={UserProfileView} />
    </TabView.Navigator>
  );
};

const HomepageScreen = () => {
  return (
    <NavigationContainer>
      <HompeScreenStack.Navigator
        initialRouteName="DebitCardViewPage"
        screenOptions={{headerShown: false, animation: 'none'}}>
        <HompeScreenStack.Screen
          name="DebitCardViewPage"
          component={DebitCardViewPage}
        />
        <HompeScreenStack.Screen
          name="debitCardlimitScreen"
          component={DebitCardlimitSetScreen}
        />
      </HompeScreenStack.Navigator>
    </NavigationContainer>
  );
};

export default HomepageScreen;
