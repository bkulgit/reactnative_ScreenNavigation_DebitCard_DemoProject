import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'DebitCard':
      iconName = 'card';
      break;
    case 'pamenthistory':
      iconName = 'arrow-forward-circle-outline';
      break;
    case 'creditsDetails':
      iconName = 'arrow-up-circle-outline';
      break;
    case 'Profile':
      iconName = 'person-circle-outline';
      break;
    default:
      break;
  }

  return <Icon name={iconName} size={22} color={color} />;
};
