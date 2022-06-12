import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomSwitch from './CustomSwitch';

const TitleAndSubtitleView = props => {
  const {
    icon = 'aperture',
    titile = '',
    subtitle = '',
    showSwitchView = false,
    ratioButtonClickListner = () => {},
    switchEnable = false,
  } = props;

  return (
    <View style={style.containerStyle}>
      <View style={style.titileSubTitleContainerStyle}>
        <View style={style.iconContainerStyle}>
          <Icon name={icon} size={18} color={'#80a0d1'} />
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={{color: '#212121'}}>{titile}</Text>
          <Text style={{color: '#BDBDBD'}}>{subtitle}</Text>
        </View>
      </View>
      {showSwitchView ? (
        <CustomSwitch
          onClickHandler={ratioButtonClickListner}
          switchEnable={switchEnable}
        />
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  titileSubTitleContainerStyle: {flexDirection: 'row', alignItems: 'center'},
  iconContainerStyle: {
    height: 26,
    width: 26,
    borderRadius: 26,
    backgroundColor: '#0b5f6d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TitleAndSubtitleView;
