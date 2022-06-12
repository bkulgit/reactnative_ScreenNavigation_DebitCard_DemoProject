import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CustomSwitch = props => {
  const {switchEnable = false, onClickHandler = {}} = props;
  return (
    <TouchableOpacity
      style={[
        style.containerStyle,
        {backgroundColor: switchEnable ? '#00dc50' : '#C8C8C8'},
      ]}
      activeOpacity={1}
      onPress={onClickHandler}>
      <View
        style={[
          style.switchButtonView,
          {justifyContent: switchEnable ? 'flex-end' : 'flex-start'},
        ]}>
        <View style={style.toggleButtonStyle} />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 16,
  },
  switchButtonView: {
    height: Dimensions.get('window').width * 0.03,
    width: Dimensions.get('window').width * 0.06,
    borderRadius: (Dimensions.get('window').width * 0.06) / 2,
    flexDirection: 'row',
  },
  toggleButtonStyle: {
    height: Dimensions.get('window').width * 0.03,
    width: Dimensions.get('window').width * 0.03,
    borderRadius: (Dimensions.get('window').width * 0.03) / 2,
    backgroundColor: 'white',
  },
});

export default CustomSwitch;
