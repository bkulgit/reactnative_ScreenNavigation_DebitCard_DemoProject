import React from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DebitCardDetailBGView = props => {
  return (
    <View style={style.containerStyle}>
      <View style={style.titileContainerStyle}>
        <Text style={style.titleStyle}>{'Debit Card'}</Text>
        <Icon name={'aperture'} size={22} color={'white'} />
      </View>
      <Text style={style.availableBalacetitle}>{'Available balance'}</Text>
      <View style={style.balanceView}>
        <Text style={style.textwithboxBackground}>{'S$'}</Text>
        <Text style={style.availableBalacetext}>{'3,000'}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#0b5f6d',
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleStyle: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
  },
  availableBalacetitle: {
    fontSize: 14,
    color: 'white',
    marginTop: Dimensions.get('window').height * 0.02,
  },
  balanceView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  textwithboxBackground: {
    backgroundColor: '#00dc50',
    paddingHorizontal: 8,
    borderRadius: 3,
    paddingVertical: 1,
  },
  availableBalacetext: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  titileContainerStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
});
export default DebitCardDetailBGView;
