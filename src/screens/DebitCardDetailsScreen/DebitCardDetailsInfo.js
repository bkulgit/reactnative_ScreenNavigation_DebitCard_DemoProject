import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import DebitCardDetailCardView from './DebitCardDetailCardView';
import DebitCardDetailBGView from './DebitCardDetailBGView';

const DebitCardDetailsScreen = props => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
      }}>
      <DebitCardDetailBGView />
      <View style={style.containerStyle}>
        <DebitCardDetailCardView {...props} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
  },
});
export default DebitCardDetailsScreen;
