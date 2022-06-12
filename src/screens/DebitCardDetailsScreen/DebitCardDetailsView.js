import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import DebitCardlimitSetScreen from './DebitCardLimitSetScreen';
import DebitCardDetailsScreen from './DebitCardDetailsInfo';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CreditCardDetailStack = createNativeStackNavigator();

const DebitCardDetailsView = () => {
  return (
    <CreditCardDetailStack.Navigator
      initialRouteName="debitCardDetailsScreen"
      screenOptions={{headerShown: false}}>
      <CreditCardDetailStack.Screen
        name="debitCardDetailsScreen"
        component={DebitCardDetailsScreen}
      />
      <CreditCardDetailStack.Screen
        name="debitCardlimitSetScreen"
        component={DebitCardlimitSetScreen}
      />
    </CreditCardDetailStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default DebitCardDetailsView;
